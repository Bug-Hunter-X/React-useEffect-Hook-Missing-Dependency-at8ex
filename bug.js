```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect conditional rendering logic
    if (count > 5) {
      console.log('Count is greater than 5');
    }
  }, [count]); // Missing dependency for count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```