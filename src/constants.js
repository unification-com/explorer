export const MAINCHAIN_ABIS = {
  //WRKChain Root
  "0x0000000000000000000000000000000000000087": [{
    "constant": false,
    "inputs": [{
      "name": "_chainId",
      "type": "uint256"
    }, {"name": "_addressesToRemove", "type": "address[]"}],
    "name": "removeAuthAddresses",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_chainId",
      "type": "uint256"
    }, {"name": "_newAuthAddresses", "type": "address[]"}],
    "name": "addAuthAddresses",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_chainId",
      "type": "uint256"
    }, {"name": "_authAddresses", "type": "address[]"}, {
      "name": "_genesisHash",
      "type": "bytes32"
    }],
    "name": "registerWrkChain",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_chainId", "type": "uint256"}],
    "name": "getNumBlocksSubmitted",
    "outputs": [{"name": "numBlocksSubmitted_", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "wrkchainList",
    "outputs": [{
      "name": "lastBlock",
      "type": "uint256"
    }, {"name": "genesisHash", "type": "bytes32"}, {
      "name": "isWrkchain",
      "type": "bool"
    }, {"name": "owner", "type": "address"}, {
      "name": "numBlocksSubmitted",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_chainId", "type": "uint256"}, {
      "name": "_height",
      "type": "uint256"
    }, {"name": "_hash", "type": "bytes32"}, {
      "name": "_parentHash",
      "type": "bytes32"
    }, {"name": "_receiptRoot", "type": "bytes32"}, {
      "name": "_txRoot",
      "type": "bytes32"
    }, {"name": "_stateRoot", "type": "bytes32"}, {
      "name": "_blockSigner",
      "type": "address"
    }],
    "name": "recordHeader",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_chainId", "type": "uint256"}, {
      "name": "_address",
      "type": "address"
    }],
    "name": "isAuthorisedAddress",
    "outputs": [{"name": "_isAuthorised", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_chainId", "type": "uint256"}],
    "name": "getGenesis",
    "outputs": [{"name": "genesisHash_", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_chainId", "type": "uint256"}, {
      "name": "_newOwner",
      "type": "address"
    }],
    "name": "changeWrkchainOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_chainId", "type": "uint256"}],
    "name": "getLastRecordedBlockNum",
    "outputs": [{"name": "lastBlock_", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "_wrkchainRegDeposit",
      "type": "uint256"
    }, {"name": "_minBlocksForDepositReturn", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {
      "indexed": true,
      "name": "_height",
      "type": "uint256"
    }, {"indexed": true, "name": "_hash", "type": "bytes32"}, {
      "indexed": false,
      "name": "_parentHash",
      "type": "bytes32"
    }, {
      "indexed": false,
      "name": "_receiptRoot",
      "type": "bytes32"
    }, {
      "indexed": false,
      "name": "_txRoot",
      "type": "bytes32"
    }, {
      "indexed": false,
      "name": "_stateRoot",
      "type": "bytes32"
    }, {"indexed": false, "name": "_blockSigner", "type": "address"}],
    "name": "RecordHeader",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {"indexed": false, "name": "_genesisHash", "type": "bytes32"}],
    "name": "RegisterWrkChain",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_from",
      "type": "address"
    }, {"indexed": false, "name": "_amount", "type": "uint256"}],
    "name": "LogFallbackFunctionCalled",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {
      "indexed": true,
      "name": "_owner",
      "type": "address"
    }, {"indexed": false, "name": "_amount", "type": "uint256"}],
    "name": "WRKChainDepositRefund",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {
      "indexed": true,
      "name": "_authorisedBy",
      "type": "address"
    }, {"indexed": false, "name": "_address", "type": "address"}],
    "name": "AuthoriseNewAddress",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {
      "indexed": true,
      "name": "_removedBy",
      "type": "address"
    }, {"indexed": false, "name": "_address", "type": "address"}],
    "name": "RemoveAuthorisedAddress",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {"indexed": false, "name": "_old", "type": "address"}, {
      "indexed": false,
      "name": "_new",
      "type": "address"
    }],
    "name": "WRKChainOwnerChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "_chainId",
      "type": "uint256"
    }, {
      "indexed": true,
      "name": "_owner",
      "type": "address"
    }, {"indexed": false, "name": "_amount", "type": "uint256"}],
    "name": "WRKChainDepositPaid",
    "type": "event"
  }],

  //BlockSigners
  "0x0000000000000000000000000000000000000089": [{
    "constant": false,
    "inputs": [{
      "name": "_blockNumber",
      "type": "uint256"
    }, {"name": "_blockHash", "type": "bytes32"}],
    "name": "sign",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_blockHash", "type": "bytes32"}],
    "name": "getSigners",
    "outputs": [{"name": "", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "epochNumber",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"name": "_epochNumber", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "_signer",
      "type": "address"
    }, {
      "indexed": false,
      "name": "_blockNumber",
      "type": "uint256"
    }, {"indexed": false, "name": "_blockHash", "type": "bytes32"}],
    "name": "Sign",
    "type": "event"
  }],

  //MasternodeVotingSMC
  "0x0000000000000000000000000000000000000088": [{
    "constant": false,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "propose",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_candidate", "type": "address"}, {
      "name": "_cap",
      "type": "uint256"
    }],
    "name": "unvote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getCandidates",
    "outputs": [{"name": "", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_blockNumber", "type": "uint256"}],
    "name": "getWithdrawCap",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "getVoters",
    "outputs": [{"name": "", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getWithdrawBlockNumbers",
    "outputs": [{"name": "", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_candidate", "type": "address"}, {
      "name": "_voter",
      "type": "address"
    }],
    "name": "getVoterCap",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "candidates",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_blockNumber", "type": "uint256"}, {
      "name": "_index",
      "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "getCandidateCap",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "vote",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "candidateCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "voterWithdrawDelay",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "resign",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "getCandidateOwner",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "maxValidatorNumber",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "candidateWithdrawDelay",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_candidate", "type": "address"}],
    "name": "isCandidate",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minCandidateCap",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minVoterCap",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"name": "_candidates", "type": "address[]"}, {
      "name": "_caps",
      "type": "uint256[]"
    }, {"name": "_firstOwner", "type": "address"}, {
      "name": "_minCandidateCap",
      "type": "uint256"
    }, {
      "name": "_minVoterCap",
      "type": "uint256"
    }, {
      "name": "_maxValidatorNumber",
      "type": "uint256"
    }, {
      "name": "_candidateWithdrawDelay",
      "type": "uint256"
    }, {"name": "_voterWithdrawDelay", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "_voter",
      "type": "address"
    }, {
      "indexed": false,
      "name": "_candidate",
      "type": "address"
    }, {"indexed": false, "name": "_cap", "type": "uint256"}],
    "name": "Vote",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "_voter",
      "type": "address"
    }, {
      "indexed": false,
      "name": "_candidate",
      "type": "address"
    }, {"indexed": false, "name": "_cap", "type": "uint256"}],
    "name": "Unvote",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "_owner",
      "type": "address"
    }, {
      "indexed": false,
      "name": "_candidate",
      "type": "address"
    }, {"indexed": false, "name": "_cap", "type": "uint256"}],
    "name": "Propose",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "_owner",
      "type": "address"
    }, {"indexed": false, "name": "_candidate", "type": "address"}],
    "name": "Resign",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "_owner",
      "type": "address"
    }, {
      "indexed": false,
      "name": "_blockNumber",
      "type": "uint256"
    }, {"indexed": false, "name": "_cap", "type": "uint256"}],
    "name": "Withdraw",
    "type": "event"
  }],

  //RandomizeSMC
  "0x0000000000000000000000000000000000000090": [{
    "constant": true,
    "inputs": [{"name": "_validator", "type": "address"}],
    "name": "getSecret",
    "outputs": [{"name": "", "type": "bytes32[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_secret", "type": "bytes32[]"}],
    "name": "setSecret",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "_validator", "type": "address"}],
    "name": "getOpening",
    "outputs": [{"name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_opening", "type": "bytes32"}],
    "name": "setOpening",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }],

  //FoudationAddr
  "0x0000000000000000000000000000000000000068": [{
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "owners",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "owner", "type": "address"}],
    "name": "removeOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "revokeConfirmation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "isOwner",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}, {
      "name": "",
      "type": "address"
    }],
    "name": "confirmations",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "pending", "type": "bool"}, {
      "name": "executed",
      "type": "bool"
    }],
    "name": "getTransactionCount",
    "outputs": [{"name": "count", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "owner", "type": "address"}],
    "name": "addOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "isConfirmed",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "getConfirmationCount",
    "outputs": [{"name": "count", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "transactions",
    "outputs": [{"name": "destination", "type": "address"}, {
      "name": "value",
      "type": "uint256"
    }, {"name": "data", "type": "bytes"}, {"name": "executed", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getOwners",
    "outputs": [{"name": "", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "from", "type": "uint256"}, {
      "name": "to",
      "type": "uint256"
    }, {"name": "pending", "type": "bool"}, {
      "name": "executed",
      "type": "bool"
    }],
    "name": "getTransactionIds",
    "outputs": [{"name": "_transactionIds", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "getConfirmations",
    "outputs": [{"name": "_confirmations", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "transactionCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_required", "type": "uint256"}],
    "name": "changeRequirement",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "confirmTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "destination", "type": "address"}, {
      "name": "value",
      "type": "uint256"
    }, {"name": "data", "type": "bytes"}],
    "name": "submitTransaction",
    "outputs": [{"name": "transactionId", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "MAX_OWNER_COUNT",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "required",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "owner", "type": "address"}, {
      "name": "newOwner",
      "type": "address"
    }],
    "name": "replaceOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "executeTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"name": "_owners", "type": "address[]"}, {
      "name": "_required",
      "type": "uint256"
    }], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Confirmation",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Revocation",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Submission",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Execution",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "ExecutionFailure",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
    "name": "OwnerAddition",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
    "name": "OwnerRemoval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "required", "type": "uint256"}],
    "name": "RequirementChange",
    "type": "event"
  }],

  //TeamAddr
  "0x0000000000000000000000000000000000000099": [{
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "owners",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "owner", "type": "address"}],
    "name": "removeOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "revokeConfirmation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "isOwner",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}, {
      "name": "",
      "type": "address"
    }],
    "name": "confirmations",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "pending", "type": "bool"}, {
      "name": "executed",
      "type": "bool"
    }],
    "name": "getTransactionCount",
    "outputs": [{"name": "count", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "owner", "type": "address"}],
    "name": "addOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "isConfirmed",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "getConfirmationCount",
    "outputs": [{"name": "count", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "transactions",
    "outputs": [{"name": "destination", "type": "address"}, {
      "name": "value",
      "type": "uint256"
    }, {"name": "data", "type": "bytes"}, {"name": "executed", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getOwners",
    "outputs": [{"name": "", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "from", "type": "uint256"}, {
      "name": "to",
      "type": "uint256"
    }, {"name": "pending", "type": "bool"}, {
      "name": "executed",
      "type": "bool"
    }],
    "name": "getTransactionIds",
    "outputs": [{"name": "_transactionIds", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "getConfirmations",
    "outputs": [{"name": "_confirmations", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "transactionCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "_required", "type": "uint256"}],
    "name": "changeRequirement",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "confirmTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "destination", "type": "address"}, {
      "name": "value",
      "type": "uint256"
    }, {"name": "data", "type": "bytes"}],
    "name": "submitTransaction",
    "outputs": [{"name": "transactionId", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "MAX_OWNER_COUNT",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "required",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "owner", "type": "address"}, {
      "name": "newOwner",
      "type": "address"
    }],
    "name": "replaceOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{"name": "transactionId", "type": "uint256"}],
    "name": "executeTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"name": "_owners", "type": "address[]"}, {
      "name": "_required",
      "type": "uint256"
    }], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Confirmation",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Revocation",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Submission",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "Execution",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "transactionId", "type": "uint256"}],
    "name": "ExecutionFailure",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "sender",
      "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
    "name": "OwnerAddition",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
    "name": "OwnerRemoval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "required", "type": "uint256"}],
    "name": "RequirementChange",
    "type": "event"
  }],
};
