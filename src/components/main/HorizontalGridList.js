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
    title: 'Homepage'
  },
  {
    img: "images/grid-list/image-2.jpg",
    title: 'Travel'
  },
  {
    img: "images/grid-list/image-3.jpg",
    title: 'Lifestyle'
  },
  {
    img: 'images/grid-list/image-4.jpg',
    title: 'About me'
  },
  {
    img: 'images/grid-list/image-5.jpg',
    title: 'Contact me'
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
