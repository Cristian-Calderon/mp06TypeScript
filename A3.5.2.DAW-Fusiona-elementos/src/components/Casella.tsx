function Casella({ children, onClick, onDrop, onDragOver }: {
  children?: React.ReactNode;
  onClick?: () => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
}) {
  return (
      <div className="cell" onClick={onClick} onDragOver={onDragOver} onDrop={onDrop}>
          {children}
      </div>
  );
}

export default Casella;