'use strict';
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xq4ajc

import relationChecker from '../../relationChecker';
import Translator from 'translator';
var translator = new Translator();

Blockly.Blocks.contract_details = {
  init: function() {
    this.appendDummyInput()
        .appendField(translator.translateText("Contract Details"));
    this.setOutput(true, "Array");
    this.setColour("#f2f2f2");
    this.setTooltip(translator.translateText('Returns the list of details for the finished contract'));
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  },
	onchange: function(ev) {
		relationChecker.inside_finish(this, ev, 'Contract Details');
	},
};
