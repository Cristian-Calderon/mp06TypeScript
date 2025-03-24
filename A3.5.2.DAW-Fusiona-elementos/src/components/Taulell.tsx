import { useState } from "react";
import Casella from "./Casella";

const ICONS = {
    aigua: ["💧", "🥛", "🚰", "🚛"],
    foc: ["🔥", "🍳", "🥓", "🍔"],
};

type IconType = "aigua" | "foc";
type GeneratorType = "generator-foc" | "generator-aigua";

type DragItem = { type: IconType; level: number, row: number; col: number };

type CellType = DragItem | GeneratorType | null;

function Taulell() {
    const [grid, setGrid] = useState<CellType[][]>(() => {
        const newGrid: CellType[][] = Array(6).fill(null).map(() => Array(6).fill(null));
        newGrid[0][0] = "generator-foc";
        newGrid[5][0] = "generator-aigua";
        return newGrid;
    });

    const [dragging, setDragging] = useState<DragItem| null>(null);

    const placeNewIcon = (type: IconType) => {
        setGrid((prev) => {
            const newGrid = prev.map(row => [...row]);
            const emptyCells: [number, number][] = [];

            newGrid.forEach((rowArr, rowIndex) => {
                rowArr.forEach((cell, colIndex) => {
                    if (!cell) {
                        emptyCells.push([rowIndex, colIndex]);
                    }
                });
            });

            if (emptyCells.length > 0) {
                const [newRow, newCol] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                newGrid[newRow][newCol] = { type, level: 0, row: newRow, col: newCol };
            }

            return newGrid;
        });
    };

    const handleDrop = (row: number, col: number) => {
        if (!dragging) return;
        const { row: oldRow, col: oldCol } = dragging;

        if (oldRow === row && oldCol === col) {
            setDragging(null);
            return;
        }

        setGrid((prev) => {
            const newGrid = [...prev];
            const target = newGrid[row][col];

            if (target && typeof target !== "string" && target.type === dragging.type && target.level === dragging.level) {
                const nextLevel = dragging.level + 1;
                if (ICONS[dragging.type][nextLevel]) {
                    newGrid[row][col] = { type: dragging.type, level: nextLevel, row: row, col: col };
                    newGrid[oldRow][oldCol] = null;
                }
            }

            return newGrid;
        });

        setDragging(null);
    };

    return (
        <div className="container">
            <h1 className="title">Fusiona-elements</h1>
            <div className="board">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <Casella
                                key={colIndex}
                                onClick={cell === "generator-foc" ? () => placeNewIcon("foc") : cell === "generator-aigua" ? () => placeNewIcon("aigua") : undefined}
                                onDrop={cell !== "generator-foc" && cell !== "generator-aigua" ? () => handleDrop(rowIndex, colIndex) : undefined}
                                onDragOver={cell !== "generator-foc" && cell !== "generator-aigua" ? (e) => e.preventDefault() : undefined}
                            >
                                {cell && typeof cell !== "string" && (
                                    <span
                                        className="icon"
                                        draggable={true}
                                        onDragStart={() => setDragging(cell)}
                                    >
                                        {ICONS[cell.type][cell.level]}
                                    </span>
                                )}
                                {cell === "generator-foc" && <span className="generator">🌋</span>}
                                {cell === "generator-aigua" && <span className="generator">☁️</span>}
                            </Casella>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Taulell;