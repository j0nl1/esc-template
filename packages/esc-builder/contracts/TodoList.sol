//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;


import "hardhat/console.sol";

contract TodoList {
  uint public taskCount = 0;

  struct Task {
    uint id;
    string content;
    bool completed;
  }

  constructor(string memory _content) {
    tasks[taskCount] = Task(taskCount, _content, false);
    console.log("Deploying a TodoList with task content:", _content);
  }

  mapping(uint => Task) public tasks;

  function createTask(string memory _content) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _content, false);
  }

}