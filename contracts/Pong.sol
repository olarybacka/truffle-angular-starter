// Supposedly, contracts can get non-constant return values from other contracts. (Whereas you can't from web3/geth.)
// These two contracts are meant to test this. Like so:

// 1. Deploy Pong with a pongval.
// 2. Deploy Ping, giving it the address of Pong.
// 3. Call Ping.getPongvalRemote() using a sendTransaction...
// 4. ... which retreives the value of pongval from Pong.
// 5. If successful Ping.getPongval() should return the value from step 1.

// UPDATE: Pong doesn't need a copy of PongvalRetriever.
//contract PongvalRetriever {
// 	int pongval_tx_retrieval_attempted = 0;
//	function getPongvalTransactional() public returns (int){	// tells Ping how to interact with Pong.
//		pongval_tx_retrieval_attempted = -1;
//		return pongval_tx_retrieval_attempted;
//	}
//}
pragma solidity ^0.4.11;
contract Pong {

    address creator;
    int pongval;
    int pongval_tx_retrieval_attempted = 0;
    
	/*********
 	 Step 1: Deploy Pong
 	 *********/
    function Pong(int _pongval) 
    {
        creator = msg.sender; 
        pongval = _pongval;
    }
	
	/*********
	 Step 4. Transactionally return pongval, overriding PongvalRetriever
	 *********/	
	function getPongvalTransactional() public returns (int)
    {
    	pongval_tx_retrieval_attempted = 1;
    	return pongval;
    }
    
// ----------------------------------------------------------------------------------------------------------------------------------------
    
    /*********
	 pongval getter/setter, just in case.
	 *********/
	function getPongvalConstant() public returns (int)
    {
    	return pongval;
    } 
	 	
	function setPongval(int _pongval)
	{
		pongval = _pongval;
	}
	
	function getPongvalTxRetrievalAttempted() constant returns (int)
	{
		return pongval_tx_retrieval_attempted;
	}
	
	/****
	 For double-checking this contract's address
	 ****/
	function getAddress() constant returns (address)
	{
		return this;
	}
	
    /**********
     Standard kill() function to recover funds 
     **********/
    
    function kill()
    { 
        if (msg.sender == creator)
            suicide(creator);  // kills this contract and sends remaining funds back to creator
    }
}

