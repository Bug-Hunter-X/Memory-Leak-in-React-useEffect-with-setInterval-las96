# React useEffect setInterval Memory Leak

This repository demonstrates a common mistake in React's `useEffect` hook: using `setInterval` without a cleanup function. This leads to memory leaks and unexpected behavior.

## Bug
The `bug.js` file contains a component that uses `setInterval` within `useEffect` without proper cleanup.  This means that when the component unmounts, the interval continues to run, leading to a memory leak and potential performance issues.

## Solution
The `bugSolution.js` file demonstrates the correct way to use `setInterval` within `useEffect`. A cleanup function is returned from the `useEffect` callback. This cleanup function is called when the component unmounts, ensuring that the interval is cleared and preventing memory leaks.