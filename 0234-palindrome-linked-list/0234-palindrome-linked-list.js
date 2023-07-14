/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  let array = [];
  let current = head;
  while (current) {
    array.push(current.val);
    current = current.next;
  }
  return array.join("") === array.reverse().join("");
};