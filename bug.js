```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a setInterval inside useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval when the component unmounts
    // This leads to memory leaks and unexpected behavior
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```