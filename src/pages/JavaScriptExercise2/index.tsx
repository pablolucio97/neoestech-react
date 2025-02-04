import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { IOption, mockedArrays } from "../../mocks/arrays";

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const JavaScriptExercise2: React.FC = () => {
  const [selectedArray, setSelectedArray] = useState<IOption | null>(null);
  const [uniqueArray, setUniqueArray] = useState<number[]>([]);
  const [head, setHead] = useState<ListNode | null>(null);

  const arrayToList = (values: number[]): ListNode | null => {
    if (values.length === 0) return null;
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i]);
      current = current.next;
    }
    return head;
  };

  const handleShowUniqueArray = useCallback(() => {
    if (head) {
      const result = listToArray(deleteDuplicates(head));
      setUniqueArray(result);
    }
  }, [head]);

  const handleResetState = () => {
    setUniqueArray([]);
    setSelectedArray(null);
    setHead(null);
  };

  const handleSelectArray = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(e.target.value, 10);
    const selectedOption = mockedArrays[selectedIndex];
    setSelectedArray(selectedOption);
    setHead(arrayToList(selectedOption.value));
  };

  function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode = head;
    while (currentNode !== null && currentNode.next !== null) {
      if (currentNode.val === currentNode.next.val) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    return head;
  }

  function listToArray(head: ListNode | null): number[] {
    const result = [];
    let currentNode = head;
    while (currentNode !== null) {
      result.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return result;
  }

  useEffect(() => {
    if (selectedArray) {
      handleShowUniqueArray();
    }
  }, [handleShowUniqueArray, selectedArray]);

  return (
    <div className="flex flex-col w-screen h-screen items-center pt-40">
      <Header pageTitle="JavaScript Exercise 2" />
      <Title title="Removing duplicate nodes" />
      <div className="w-[95%] md:w-[40rem] flex flex-col bg-gray-50 p-4 rounded-lg shadow-md mb-3">
        <select
          value={selectedArray ? selectedArray.label : ""}
          onChange={handleSelectArray}
          className="h-12 outline-none"
        >
          <option label="Select an option">-</option>
          {mockedArrays.map((arr, i) => (
            <option key={i} value={i.toString()}>
              {arr.label}
            </option>
          ))}
        </select>
        <span className="mt-6 mb-2 text-md md:text-lg">
          Array containing only unique values: {uniqueArray.join(",")}
        </span>
      </div>
      <button onClick={handleResetState}>Reset state</button>
    </div>
  );
};

export default JavaScriptExercise2;
