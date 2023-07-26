/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  
  let newHead = head.next;
  let current = head;
  let prev = null;
  
  while (current && current.next) {
    let next = current.next;
    current.next = next.next;
    next.next = current;
    
    if (prev) {
      prev.next = next;
    }
    
    prev = current;
    current = current.next;    
  }
  
  return newHead;
};