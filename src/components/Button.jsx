function Button({ text, variant }) {
  const styles = {
    dark: "bg-black text-white",
    outline: "border border-black",
    green: "bg-lime-300 text-black",
  };

  return (
    <button className={`px-6 py-3 rounded-lg ${styles[variant]}`}>
      {text}
    </button>
  );
}

export default Button;