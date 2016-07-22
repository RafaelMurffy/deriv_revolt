'use strict';

Blockly.JavaScript.balance = function(block) {
  var balance_type = block.getFieldValue('BALANCE_TYPE');
	var code = 'Bot.trade.getBalance(\''+ balance_type +'\')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
