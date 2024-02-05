class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const middleNode = (head: ListNode | null): ListNode | null => {
  let counter = 0;
  let current = head;

  while (current !== null) {
    counter++;
    current = current.next;
  }

  counter = counter % 2 === 0 ? counter / 2 : Math.ceil(counter / 2) - 1;
  current = head;

  while (counter > 0) {
    counter--;
    current = current!.next;
  }

  return current;
};

const list = new ListNode(1, null);

console.log(middleNode(list));
