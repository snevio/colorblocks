
const body = document.body
const grid = document.getElementById("grid-base")

const gridWidth = grid.offsetWidth;
const gridHeight = grid.offsetHeight
const singleGridSize = 50;

const rows = Math.floor(gridWidth / singleGridSize)
const colums = Math.floor(gridHeight / singleGridSize)

grid.style.setProperty("--columns", colums);
grid.style.setProperty("--rows", rows)

function randomRgbaString(alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
}


const createNewTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile")
    tile.addEventListener("mouseover", () => {

        anime({
            targets: '.tile',
            backgroundColor: randomRgbaString(Math.random() * 100),
            loop: false,

            delay: anime.stagger(50, { grid: [rows, colums], from: index }),
            begin: () => {
                grid.style.pointerEvents = "none"
            },

            complete: () => {
                grid.style.pointerEvents = "all"
            }
        }


        );
    })

    return tile;
}

const appendTiles = (tiles) => {

    for (let i = 0; i < tiles; i++) {
        grid.appendChild(createNewTile(i))
    }
}

appendTiles(colums * rows)
