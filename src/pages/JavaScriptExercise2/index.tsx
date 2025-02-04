import { useState } from "react";

const JavaScriptExercise2: React.FC = () => {
  const [uniqueArray, setUniqueArray] = useState<number[]>([]);

  class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode = head;

    while (currentNode !== null && currentNode.next !== null) {
      if (currentNode.val === currentNode.next.val) {
        // Pular o nó duplicado
        currentNode.next = currentNode.next.next;
      } else {
        // Mover para o próximo nó se não for um duplicado
        currentNode = currentNode.next;
      }
    }
    return head;
  }

  // Função para converter ListNode em um array de valores
  function listToArray(head: ListNode | null): number[] {
    const result = [];
    let currentNode = head;

    while (currentNode !== null) {
      result.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return result;
  }

  const head1 = new ListNode(1, new ListNode(4, new ListNode(22)));
  // const head2 = new ListNode(
  //   1,
  //   new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
  // );

  const handleShowUniqueArray = () => {
    const head = listToArray(deleteDuplicates(head1));
    setUniqueArray(head);
  };

  const handleResetState = () => {
    setUniqueArray([]);
  };

  return (
    <div>
      <p>JavaScript Exercise 2</p>
      <button onClick={handleShowUniqueArray}>Show unique array</button>
      <p>{uniqueArray.map((val, i) => (i !== 0 ? "," + val : val))}</p>
      <button onClick={handleResetState}>Reset state</button>
    </div>
  );
};

export default JavaScriptExercise2;
