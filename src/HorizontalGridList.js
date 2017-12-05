import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'images/grid-list/image-1.jpg',
    title: 'Category1',
  },
  {
    img: "images/grid-list/image-2.jpg",
    title: 'Category-2',
  },
  {
    img: "images/grid-list/image-3.jpg",
    title: 'Category-3',
  },
  {
    img: 'images/grid-list/image-4.jpg',
    title: 'Category-4',
  },
  {
    img: 'images/grid-list/image-5.jpg',
    title: 'Category-5',
  },
  {
    img: 'images/grid-list/image-6.jpg',
    title: 'Category-6',
  }
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} alt={tile.title} />
        </GridTile>
      )
    )
  }
    </GridList>
  </div>
);

export default GridListExampleSingleLine;
