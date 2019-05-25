import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { addBlock, sortByKey, blocksToFetch } from './components/Home';


var baseNumber = 50169;


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function generateTestBlock(block_number) {
  var block = {
    'number': baseNumber + block_number,
    'timstamp': 1558767635
  }
  return block
}

function insertBlocks(currentHead, upto) {
  var blockList = new Array();

  for (var i = 0; i < upto; i++) {
    var block = generateTestBlock(i);

    blockList = addBlock(blockList, block)
    blockList = sortByKey(blockList, "number")
  }

  var toFetch = blocksToFetch(currentHead, blockList);
  return toFetch
}

test('inserts a bunch of blocks and determines fetch', () => {
  expect(insertBlocks(50174, 5)).toEqual([50174]);
  expect(insertBlocks(50173, 5)).toEqual([]);
  expect(insertBlocks(50175, 5)).toEqual([50174, 50175]);
  expect(insertBlocks(50178, 5)).toEqual([50174, 50175, 50176, 50177, 50178]);
});
