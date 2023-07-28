/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  let secondeNode = splitList(head);
  secondeNode = reverseList(secondeNode);
  mergeTwoList(head, secondeNode);
  
  function splitList(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    const half = slow.next;
    slow.next = null;
    
    return half;
  }
  
  function reverseList(list) {
    let current = list;
    let prev = null;
    let next = null;
    
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    return prev;
  }
  
  function mergeTwoList(list1, list2) {  
    while (list2) {
      let temp = list1.next;
      list1.next = list2;
      list1 = list2;
      list2 = temp;
    }
  }
};