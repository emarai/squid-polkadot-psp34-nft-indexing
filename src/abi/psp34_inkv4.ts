import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x9ed7b05ea4c3f44cc6f57b66b54b8f2e9ac62640ae1e8d21e55d8f7229653b10",
    "language": "ink! 4.2.0",
    "compiler": "rustc 1.70.0-nightly",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "2.2.1",
      "rust_toolchain": "nightly-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "paras_launchpad",
    "version": "0.3.0",
    "authors": [
      "Paras <dev@paras.id>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 8
            }
          },
          {
            "label": "symbol",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 8
            }
          },
          {
            "label": "base_uri",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 8
            }
          },
          {
            "label": "max_supply",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 6
            }
          },
          {
            "label": "prepresale_price_per_mint",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 7
            }
          },
          {
            "label": "presale_price_per_mint",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 7
            }
          },
          {
            "label": "price_per_mint",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 7
            }
          },
          {
            "label": "prepresale_start_at",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 6
            }
          },
          {
            "label": "presale_start_at",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 6
            }
          },
          {
            "label": "public_sale_start_at",
            "type": {
              "displayName": [
                "u64"
              ],
              "type": 6
            }
          },
          {
            "label": "public_sale_end_at",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 10
            }
          },
          {
            "label": "launchpad_fee",
            "type": {
              "displayName": [
                "Percentage"
              ],
              "type": 7
            }
          },
          {
            "label": "project_treasury",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "launchpad_treasury",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 11
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 0
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 7
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 5
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 46
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 45
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 6
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 24
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 24
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "Id"
              ],
              "type": 18
            }
          }
        ],
        "docs": [
          "Event emitted when a token transfer occurs."
        ],
        "label": "Transfer"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 17
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "approved",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 19
            }
          }
        ],
        "docs": [
          "Event emitted when a token approve occurs."
        ],
        "label": "Approval"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 12
    },
    "messages": [
      {
        "args": [
          {
            "label": "code_hash",
            "type": {
              "displayName": [],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "set_code",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x694fb50f"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns current NFT total supply."
        ],
        "label": "PSP34::total_supply",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x628413fe"
      },
      {
        "args": [
          {
            "label": "operator",
            "type": {
              "displayName": [
                "psp34_external",
                "ApproveInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "psp34_external",
                "ApproveInput2"
              ],
              "type": 17
            }
          },
          {
            "label": "approved",
            "type": {
              "displayName": [
                "psp34_external",
                "ApproveInput3"
              ],
              "type": 19
            }
          }
        ],
        "default": false,
        "docs": [
          " Approves `operator` to withdraw the `id` token from the caller's account.",
          " If `id` is `None` approves or disapproves the operator for all tokens of the caller.",
          "",
          " On success a `Approval` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `SelfApprove` error if it is self approve.",
          "",
          " Returns `NotApproved` error if caller is not owner of `id`."
        ],
        "label": "PSP34::approve",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x1932a8b0"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "psp34_external",
                "TransferInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "psp34_external",
                "TransferInput2"
              ],
              "type": 18
            }
          },
          {
            "label": "data",
            "type": {
              "displayName": [
                "psp34_external",
                "TransferInput3"
              ],
              "type": 8
            }
          }
        ],
        "default": false,
        "docs": [
          " Transfer approved or owned token from caller.",
          "",
          " On success a `Transfer` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `TokenNotExists` error if `id` does not exist.",
          "",
          " Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
          "",
          " Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer."
        ],
        "label": "PSP34::transfer",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x3128d61b"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns the collection `Id` of the NFT token.",
          "",
          " This can represents the relationship between tokens/contracts/pallets."
        ],
        "label": "PSP34::collection_id",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xffa27a5f"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "psp34_external",
                "BalanceOfInput1"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns the balance of the owner.",
          "",
          " This represents the amount of unique tokens the owner has."
        ],
        "label": "PSP34::balance_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0xcde7e55f"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "psp34_external",
                "AllowanceInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "operator",
            "type": {
              "displayName": [
                "psp34_external",
                "AllowanceInput2"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "psp34_external",
                "AllowanceInput3"
              ],
              "type": 17
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns `true` if the operator is approved by the owner to withdraw `id` token.",
          " If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens."
        ],
        "label": "PSP34::allowance",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 22
        },
        "selector": "0x4790f55a"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "psp34_external",
                "OwnerOfInput1"
              ],
              "type": 18
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns the owner of the token if any."
        ],
        "label": "PSP34::owner_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 23
        },
        "selector": "0x1168624d"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "psp34enumerable_external",
                "OwnersTokenByIndexInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "index",
            "type": {
              "displayName": [
                "psp34enumerable_external",
                "OwnersTokenByIndexInput2"
              ],
              "type": 7
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns a token `Id` owned by `owner` at a given `index` of its token list.",
          " Use along with `balance_of` to enumerate all of ``owner``'s tokens.",
          "",
          " The start index is zero."
        ],
        "label": "PSP34Enumerable::owners_token_by_index",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 25
        },
        "selector": "0x3bcfb511"
      },
      {
        "args": [
          {
            "label": "index",
            "type": {
              "displayName": [
                "psp34enumerable_external",
                "TokenByIndexInput1"
              ],
              "type": 7
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns a token `Id` at a given `index` of all the tokens stored by the contract.",
          " Use along with `total_supply` to enumerate all tokens.",
          "",
          " The start index is zero."
        ],
        "label": "PSP34Enumerable::token_by_index",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 25
        },
        "selector": "0xcd0340d0"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "psp34metadata_external",
                "GetAttributeInput1"
              ],
              "type": 18
            }
          },
          {
            "label": "key",
            "type": {
              "displayName": [
                "psp34metadata_external",
                "GetAttributeInput2"
              ],
              "type": 8
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns the attribute of `id` for the given `key`.",
          "",
          " If `id` is a collection id of the token, it returns attributes for collection."
        ],
        "label": "PSP34Metadata::get_attribute",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 27
        },
        "selector": "0xf19d48d1"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Leaves the contract without owner. It will not be possible to call",
          " owner's functions anymore. Can only be called by the current owner.",
          "",
          " NOTE: Renouncing ownership will leave the contract without an owner,",
          " thereby removing any functionality that is only available to the owner.",
          "",
          " On success a `OwnershipTransferred` event is emitted.",
          "",
          " # Errors",
          "",
          " Panics with `CallerIsNotOwner` error if caller is not owner"
        ],
        "label": "Ownable::renounce_ownership",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 29
        },
        "selector": "0x5e228753"
      },
      {
        "args": [
          {
            "label": "new_owner",
            "type": {
              "displayName": [
                "ownable_external",
                "TransferOwnershipInput1"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Transfers ownership of the contract to a `new_owner`.",
          " Can only be called by the current owner.",
          "",
          " On success a `OwnershipTransferred` event is emitted.",
          "",
          " # Errors",
          "",
          " Panics with `CallerIsNotOwner` error if caller is not owner.",
          "",
          " Panics with `NewOwnerIsZero` error if new owner's address is zero."
        ],
        "label": "Ownable::transfer_ownership",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 29
        },
        "selector": "0x11f43efd"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns the address of the current owner."
        ],
        "label": "Ownable::owner",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 32
        },
        "selector": "0x4fa43c8c"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_public_sale_start_at",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 33
        },
        "selector": "0x9785e5ad"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Mint next available token for the caller"
        ],
        "label": "Launchpad::mint_next",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xf02a61f2"
      },
      {
        "args": [
          {
            "label": "max_amount",
            "type": {
              "displayName": [
                "launchpad_external",
                "SetMaxMintAmountInput1"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [
          " Set max number of tokens which could be minted per call"
        ],
        "label": "Launchpad::set_max_mint_amount",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x7bcbcd9b"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Get token price presale"
        ],
        "label": "Launchpad::presale_price",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x24399466"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "launchpad_external",
                "MintInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "mint_amount",
            "type": {
              "displayName": [
                "launchpad_external",
                "MintInput2"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [
          " Mint one or more tokens"
        ],
        "label": "Launchpad::mint",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x339a1f14"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "launchpad_external",
                "MintProjectInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "mint_amount",
            "type": {
              "displayName": [
                "launchpad_external",
                "MintProjectInput2"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [
          " Mint for project treasury"
        ],
        "label": "Launchpad::mint_project",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x3c6f9626"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_presale_start_at",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 33
        },
        "selector": "0x573d72cf"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_prepresale_start_at",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 33
        },
        "selector": "0xdebdc3ea"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_launchpad_fee",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x20363824"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_available_to_withdraw_launchpad",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x404d2f60"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "launchpad_external",
                "AddAccountToPresaleInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "mint_amount",
            "type": {
              "displayName": [
                "launchpad_external",
                "AddAccountToPresaleInput2"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::add_account_to_presale",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xcd63a694"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_available_to_withdraw_project",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x6eb500e3"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_launchpad_treasury_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 32
        },
        "selector": "0x9c1fefc1"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "launchpad_external",
                "AddAccountToPrepresaleInput1"
              ],
              "type": 0
            }
          },
          {
            "label": "mint_amount",
            "type": {
              "displayName": [
                "launchpad_external",
                "AddAccountToPrepresaleInput2"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::add_account_to_prepresale",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x7253a5b3"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Get token price presale"
        ],
        "label": "Launchpad::prepresale_price",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x22195d3a"
      },
      {
        "args": [
          {
            "label": "account_id_mint_amounts",
            "type": {
              "displayName": [
                "launchpad_external",
                "AddAccountToPrepresaleBatchInput1"
              ],
              "type": 34
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::add_account_to_prepresale_batch",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x86e0adc1"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Get token price"
        ],
        "label": "Launchpad::price",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0xbfb4e0e0"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "launchpad_external",
                "GetAccountPrepresaleMintingAmountInput1"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_account_prepresale_minting_amount",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 36
        },
        "selector": "0x9f1bfa9b"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "launchpad_external",
                "GetAccountPresaleMintingAmountInput1"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_account_presale_minting_amount",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 36
        },
        "selector": "0x2d1251f8"
      },
      {
        "args": [
          {
            "label": "account_id_mint_amounts",
            "type": {
              "displayName": [
                "launchpad_external",
                "AddAccountToPresaleBatchInput1"
              ],
              "type": 34
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::add_account_to_presale_batch",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x9a9565fb"
      },
      {
        "args": [
          {
            "label": "minting_status_index",
            "type": {
              "displayName": [
                "launchpad_external",
                "SetMintingStatusInput1"
              ],
              "type": 37
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Launchpad::set_minting_status",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x7599a8f7"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_minting_status",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 38
        },
        "selector": "0x68375362"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_project_treasury_address",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 32
        },
        "selector": "0x445e071f"
      },
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "Launchpad::get_public_sale_end_at",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 36
        },
        "selector": "0xf551d63f"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Get max number of tokens which could be minted per call"
        ],
        "label": "Launchpad::get_max_mint_amount",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 33
        },
        "selector": "0xf6196c55"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Get max supply of tokens"
        ],
        "label": "Launchpad::max_supply",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 33
        },
        "selector": "0xcfff8196"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Withdraw funds to launchpad project"
        ],
        "label": "Launchpad::withdraw_project",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x8d797984"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Withdraw funds to contract owner"
        ],
        "label": "Launchpad::withdraw_launchpad",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xce9a9645"
      },
      {
        "args": [
          {
            "label": "index",
            "type": {
              "displayName": [
                "psp34traits_external",
                "GetAttributeNameInput1"
              ],
              "type": 5
            }
          }
        ],
        "default": false,
        "docs": [
          " This function return the attribute name using attribute index. Beacause attributes of an NFT can be set to anything by Contract Owner, AztZero uses this function to get all attributes of an NFT"
        ],
        "label": "Psp34Traits::get_attribute_name",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 39
        },
        "selector": "0xfcfe34de"
      },
      {
        "args": [
          {
            "label": "token_id",
            "type": {
              "displayName": [
                "psp34traits_external",
                "TokenUriInput1"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [
          " Get URI from token ID"
        ],
        "label": "Psp34Traits::token_uri",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 39
        },
        "selector": "0x249dfd4f"
      },
      {
        "args": [
          {
            "label": "uri",
            "type": {
              "displayName": [
                "psp34traits_external",
                "SetBaseUriInput1"
              ],
              "type": 40
            }
          }
        ],
        "default": false,
        "docs": [
          " Set new value for the baseUri"
        ],
        "label": "Psp34Traits::set_base_uri",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x4de6850b"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " This function return how many unique attributes in the contract"
        ],
        "label": "Psp34Traits::get_attribute_count",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0x61c50d69"
      },
      {
        "args": [
          {
            "label": "token_id",
            "type": {
              "displayName": [
                "psp34traits_external",
                "GetAttributesInput1"
              ],
              "type": 18
            }
          },
          {
            "label": "attributes",
            "type": {
              "displayName": [
                "psp34traits_external",
                "GetAttributesInput2"
              ],
              "type": 41
            }
          }
        ],
        "default": false,
        "docs": [
          " This function returns all available attributes of each NFT"
        ],
        "label": "Psp34Traits::get_attributes",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 42
        },
        "selector": "0x18209102"
      },
      {
        "args": [
          {
            "label": "token_id",
            "type": {
              "displayName": [
                "psp34traits_external",
                "SetMultipleAttributesInput1"
              ],
              "type": 18
            }
          },
          {
            "label": "metadata",
            "type": {
              "displayName": [
                "psp34traits_external",
                "SetMultipleAttributesInput2"
              ],
              "type": 43
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "Psp34Traits::set_multiple_attributes",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x5bf8416b"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x1cc80634",
                              "ty": 0
                            }
                          },
                          "root_key": "0x1cc80634"
                        }
                      },
                      "name": "token_owner"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x7e3fae6b",
                              "ty": 3
                            }
                          },
                          "root_key": "0x7e3fae6b"
                        }
                      },
                      "name": "operator_approvals"
                    },
                    {
                      "layout": {
                        "struct": {
                          "fields": [
                            {
                              "layout": {
                                "root": {
                                  "layout": {
                                    "enum": {
                                      "dispatchKey": "0xca32a240",
                                      "name": "Id",
                                      "variants": {
                                        "0": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0xca32a240",
                                                  "ty": 2
                                                }
                                              },
                                              "name": "0"
                                            }
                                          ],
                                          "name": "U8"
                                        },
                                        "1": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0xca32a240",
                                                  "ty": 4
                                                }
                                              },
                                              "name": "0"
                                            }
                                          ],
                                          "name": "U16"
                                        },
                                        "2": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0xca32a240",
                                                  "ty": 5
                                                }
                                              },
                                              "name": "0"
                                            }
                                          ],
                                          "name": "U32"
                                        },
                                        "3": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0xca32a240",
                                                  "ty": 6
                                                }
                                              },
                                              "name": "0"
                                            }
                                          ],
                                          "name": "U64"
                                        },
                                        "4": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0xca32a240",
                                                  "ty": 7
                                                }
                                              },
                                              "name": "0"
                                            }
                                          ],
                                          "name": "U128"
                                        },
                                        "5": {
                                          "fields": [
                                            {
                                              "layout": {
                                                "leaf": {
                                                  "key": "0xca32a240",
                                                  "ty": 8
                                                }
                                              },
                                              "name": "0"
                                            }
                                          ],
                                          "name": "Bytes"
                                        }
                                      }
                                    }
                                  },
                                  "root_key": "0xca32a240"
                                }
                              },
                              "name": "enumerable"
                            },
                            {
                              "layout": {
                                "enum": {
                                  "dispatchKey": "0x00000000",
                                  "name": "Option",
                                  "variants": {
                                    "0": {
                                      "fields": [],
                                      "name": "None"
                                    },
                                    "1": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0x00000000",
                                              "ty": 3
                                            }
                                          },
                                          "name": "0"
                                        }
                                      ],
                                      "name": "Some"
                                    }
                                  }
                                }
                              },
                              "name": "_reserved"
                            }
                          ],
                          "name": "Balances"
                        }
                      },
                      "name": "balances"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 3
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "_reserved"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "psp34"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 0
                        }
                      },
                      "name": "owner"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 3
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "_reserved"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "ownable"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x9b2d2382",
                              "ty": 8
                            }
                          },
                          "root_key": "0x9b2d2382"
                        }
                      },
                      "name": "attributes"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 3
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "_reserved"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "metadata"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 5
                        }
                      },
                      "name": "collection_id"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 6
                        }
                      },
                      "name": "max_supply"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "price_per_mint"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 6
                        }
                      },
                      "name": "max_amount"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 9
                        }
                      },
                      "name": "token_set"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 6
                        }
                      },
                      "name": "pseudo_random_salt"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 2
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "forced_minting_status"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 6
                        }
                      },
                      "name": "public_sale_start_at"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 6
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "public_sale_end_at"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 6
                        }
                      },
                      "name": "prepresale_start_at"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "prepresale_price_per_mint"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x1d90320a",
                              "ty": 6
                            }
                          },
                          "root_key": "0x1d90320a"
                        }
                      },
                      "name": "prepresale_whitelisted"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 6
                        }
                      },
                      "name": "presale_start_at"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "presale_price_per_mint"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x79a7901b",
                              "ty": 6
                            }
                          },
                          "root_key": "0x79a7901b"
                        }
                      },
                      "name": "presale_whitelisted"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0xc5f56d89",
                              "ty": 2
                            }
                          },
                          "root_key": "0xc5f56d89"
                        }
                      },
                      "name": "minting_type_for_token"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "total_sales"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "withdrawn_sales_project"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "withdrawn_sales_launchpad"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 7
                        }
                      },
                      "name": "launchpad_fee"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 0
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "project_treasury"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 0
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "launchpad_treasury"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 5
                        }
                      },
                      "name": "attribute_count"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x8bf87035",
                              "ty": 8
                            }
                          },
                          "root_key": "0x8bf87035"
                        }
                      },
                      "name": "attribute_names"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "launchpad"
            }
          ],
          "name": "ParasLaunchpadContract"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 2
          }
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "u16"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "sequence": {
            "type": 2
          }
        }
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "sequence": {
            "type": 6
          }
        }
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 6
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 3
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 14
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 14
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 15
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 3
          },
          {
            "name": "E",
            "type": 15
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 8,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              },
              {
                "index": 1,
                "name": "SelfApprove"
              },
              {
                "index": 2,
                "name": "NotApproved"
              },
              {
                "index": 3,
                "name": "TokenExists"
              },
              {
                "index": 4,
                "name": "TokenNotExists"
              },
              {
                "fields": [
                  {
                    "type": 8,
                    "typeName": "String"
                  }
                ],
                "index": 5,
                "name": "SafeTransferCheckFailed"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "psp34",
          "PSP34Error"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 7
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 18
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 18
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 2,
                    "typeName": "u8"
                  }
                ],
                "index": 0,
                "name": "U8"
              },
              {
                "fields": [
                  {
                    "type": 4,
                    "typeName": "u16"
                  }
                ],
                "index": 1,
                "name": "U16"
              },
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "u32"
                  }
                ],
                "index": 2,
                "name": "U32"
              },
              {
                "fields": [
                  {
                    "type": 6,
                    "typeName": "u64"
                  }
                ],
                "index": 3,
                "name": "U64"
              },
              {
                "fields": [
                  {
                    "type": 7,
                    "typeName": "u128"
                  }
                ],
                "index": 4,
                "name": "U128"
              },
              {
                "fields": [
                  {
                    "type": 8,
                    "typeName": "Vec<u8>"
                  }
                ],
                "index": 5,
                "name": "Bytes"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "types",
          "Id"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 18
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 18
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 21,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 19
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 19
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 24
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 24
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 24,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 25,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 26
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 26
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 26,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 18
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 15
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 18
          },
          {
            "name": "E",
            "type": 15
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 27,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 28
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 28
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 28,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 8
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 30
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 30
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 30,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 31
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 3
          },
          {
            "name": "E",
            "type": 31
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 31,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "CallerIsNotOwner"
              },
              {
                "index": 1,
                "name": "NewOwnerIsZero"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "ownable",
          "OwnableError"
        ]
      }
    },
    {
      "id": 32,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 33,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 6
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 34,
      "type": {
        "def": {
          "sequence": {
            "type": 35
          }
        }
      }
    },
    {
      "id": 35,
      "type": {
        "def": {
          "tuple": [
            0,
            6
          ]
        }
      }
    },
    {
      "id": 36,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 10
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 37,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 2
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 2
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 38,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 8
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 39,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 40
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 40
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 40,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 41,
      "type": {
        "def": {
          "sequence": {
            "type": 40
          }
        }
      }
    },
    {
      "id": 42,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 41
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 41
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 43,
      "type": {
        "def": {
          "sequence": {
            "type": 44
          }
        }
      }
    },
    {
      "id": 44,
      "type": {
        "def": {
          "tuple": [
            40,
            40
          ]
        }
      }
    },
    {
      "id": 45,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 46,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    PSP34_total_supply(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x628413fe', [])
    }

    PSP34_collection_id(): Promise<Result<Id, LangError>> {
        return this.stateCall('0xffa27a5f', [])
    }

    PSP34_balance_of(owner: Uint8Array): Promise<Result<GetAttributeNameInput1, LangError>> {
        return this.stateCall('0xcde7e55f', [owner])
    }

    PSP34_allowance(owner: Uint8Array, operator: Uint8Array, id: (Id | undefined)): Promise<Result<boolean, LangError>> {
        return this.stateCall('0x4790f55a', [owner, operator, id])
    }

    PSP34_owner_of(id: Id): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0x1168624d', [id])
    }

    PSP34Enumerable_owners_token_by_index(owner: Uint8Array, index: bigint): Promise<Result<Result<Id, PSP34Error>, LangError>> {
        return this.stateCall('0x3bcfb511', [owner, index])
    }

    PSP34Enumerable_token_by_index(index: bigint): Promise<Result<Result<Id, PSP34Error>, LangError>> {
        return this.stateCall('0xcd0340d0', [index])
    }

    PSP34Metadata_get_attribute(id: Id, key: Uint8Array): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0xf19d48d1', [id, key])
    }

    Ownable_owner(): Promise<Result<Uint8Array, LangError>> {
        return this.stateCall('0x4fa43c8c', [])
    }

    Launchpad_get_public_sale_start_at(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x9785e5ad', [])
    }

    Launchpad_presale_price(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x24399466', [])
    }

    Launchpad_get_presale_start_at(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x573d72cf', [])
    }

    Launchpad_get_prepresale_start_at(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0xdebdc3ea', [])
    }

    Launchpad_get_launchpad_fee(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x20363824', [])
    }

    Launchpad_get_available_to_withdraw_launchpad(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x404d2f60', [])
    }

    Launchpad_get_available_to_withdraw_project(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x6eb500e3', [])
    }

    Launchpad_get_launchpad_treasury_address(): Promise<Result<Uint8Array, LangError>> {
        return this.stateCall('0x9c1fefc1', [])
    }

    Launchpad_prepresale_price(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x22195d3a', [])
    }

    Launchpad_price(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0xbfb4e0e0', [])
    }

    Launchpad_get_account_prepresale_minting_amount(account_id: Uint8Array): Promise<Result<(bigint | undefined), LangError>> {
        return this.stateCall('0x9f1bfa9b', [account_id])
    }

    Launchpad_get_account_presale_minting_amount(account_id: Uint8Array): Promise<Result<(bigint | undefined), LangError>> {
        return this.stateCall('0x2d1251f8', [account_id])
    }

    Launchpad_get_minting_status(): Promise<Result<Uint8Array, LangError>> {
        return this.stateCall('0x68375362', [])
    }

    Launchpad_get_project_treasury_address(): Promise<Result<Uint8Array, LangError>> {
        return this.stateCall('0x445e071f', [])
    }

    Launchpad_get_public_sale_end_at(): Promise<Result<(bigint | undefined), LangError>> {
        return this.stateCall('0xf551d63f', [])
    }

    Launchpad_max_supply(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0xcfff8196', [])
    }

    Psp34Traits_get_attribute_name(index: GetAttributeNameInput1): Promise<Result<SetBaseUriInput1, LangError>> {
        return this.stateCall('0xfcfe34de', [index])
    }

    Psp34Traits_token_uri(token_id: bigint): Promise<Result<SetBaseUriInput1, LangError>> {
        return this.stateCall('0x249dfd4f', [token_id])
    }

    Psp34Traits_get_attribute_count(): Promise<Result<GetAttributeNameInput1, LangError>> {
        return this.stateCall('0x61c50d69', [])
    }

    Psp34Traits_get_attributes(token_id: Id, attributes: GetAttributesInput2): Promise<Result<GetAttributesInput2, LangError>> {
        return this.stateCall('0x18209102', [token_id, attributes])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Transfer | Event_Approval

export interface Event_Transfer {
    __kind: 'Transfer'
    from: (Uint8Array | undefined)
    to: (Uint8Array | undefined)
    id: Id
}

export interface Event_Approval {
    __kind: 'Approval'
    from: Uint8Array
    to: Uint8Array
    id: (Id | undefined)
    approved: boolean
}

export type Message = Message_set_code | Message_PSP34_total_supply | Message_PSP34_approve | Message_PSP34_transfer | Message_PSP34_collection_id | Message_PSP34_balance_of | Message_PSP34_allowance | Message_PSP34_owner_of | Message_PSP34Enumerable_owners_token_by_index | Message_PSP34Enumerable_token_by_index | Message_PSP34Metadata_get_attribute | Message_Ownable_renounce_ownership | Message_Ownable_transfer_ownership | Message_Ownable_owner | Message_Launchpad_get_public_sale_start_at | Message_Launchpad_mint_next | Message_Launchpad_set_max_mint_amount | Message_Launchpad_presale_price | Message_Launchpad_mint | Message_Launchpad_mint_project | Message_Launchpad_get_presale_start_at | Message_Launchpad_get_prepresale_start_at | Message_Launchpad_get_launchpad_fee | Message_Launchpad_get_available_to_withdraw_launchpad | Message_Launchpad_add_account_to_presale | Message_Launchpad_get_available_to_withdraw_project | Message_Launchpad_get_launchpad_treasury_address | Message_Launchpad_add_account_to_prepresale | Message_Launchpad_prepresale_price | Message_Launchpad_add_account_to_prepresale_batch | Message_Launchpad_price | Message_Launchpad_get_account_prepresale_minting_amount | Message_Launchpad_get_account_presale_minting_amount | Message_Launchpad_add_account_to_presale_batch | Message_Launchpad_set_minting_status | Message_Launchpad_get_minting_status | Message_Launchpad_get_project_treasury_address | Message_Launchpad_get_public_sale_end_at | Message_Launchpad_get_max_mint_amount | Message_Launchpad_max_supply | Message_Launchpad_withdraw_project | Message_Launchpad_withdraw_launchpad | Message_Psp34Traits_get_attribute_name | Message_Psp34Traits_token_uri | Message_Psp34Traits_set_base_uri | Message_Psp34Traits_get_attribute_count | Message_Psp34Traits_get_attributes | Message_Psp34Traits_set_multiple_attributes

export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Uint8Array
}

/**
 *  Returns current NFT total supply.
 */
export interface Message_PSP34_total_supply {
    __kind: 'PSP34_total_supply'
}

/**
 *  Approves `operator` to withdraw the `id` token from the caller's account.
 *  If `id` is `None` approves or disapproves the operator for all tokens of the caller.
 * 
 *  On success a `Approval` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `SelfApprove` error if it is self approve.
 * 
 *  Returns `NotApproved` error if caller is not owner of `id`.
 */
export interface Message_PSP34_approve {
    __kind: 'PSP34_approve'
    operator: Uint8Array
    id: (Id | undefined)
    approved: boolean
}

/**
 *  Transfer approved or owned token from caller.
 * 
 *  On success a `Transfer` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `TokenNotExists` error if `id` does not exist.
 * 
 *  Returns `NotApproved` error if `from` doesn't have allowance for transferring.
 * 
 *  Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer.
 */
export interface Message_PSP34_transfer {
    __kind: 'PSP34_transfer'
    to: Uint8Array
    id: Id
    data: Uint8Array
}

/**
 *  Returns the collection `Id` of the NFT token.
 * 
 *  This can represents the relationship between tokens/contracts/pallets.
 */
export interface Message_PSP34_collection_id {
    __kind: 'PSP34_collection_id'
}

/**
 *  Returns the balance of the owner.
 * 
 *  This represents the amount of unique tokens the owner has.
 */
export interface Message_PSP34_balance_of {
    __kind: 'PSP34_balance_of'
    owner: Uint8Array
}

/**
 *  Returns `true` if the operator is approved by the owner to withdraw `id` token.
 *  If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens.
 */
export interface Message_PSP34_allowance {
    __kind: 'PSP34_allowance'
    owner: Uint8Array
    operator: Uint8Array
    id: (Id | undefined)
}

/**
 *  Returns the owner of the token if any.
 */
export interface Message_PSP34_owner_of {
    __kind: 'PSP34_owner_of'
    id: Id
}

/**
 *  Returns a token `Id` owned by `owner` at a given `index` of its token list.
 *  Use along with `balance_of` to enumerate all of ``owner``'s tokens.
 * 
 *  The start index is zero.
 */
export interface Message_PSP34Enumerable_owners_token_by_index {
    __kind: 'PSP34Enumerable_owners_token_by_index'
    owner: Uint8Array
    index: bigint
}

/**
 *  Returns a token `Id` at a given `index` of all the tokens stored by the contract.
 *  Use along with `total_supply` to enumerate all tokens.
 * 
 *  The start index is zero.
 */
export interface Message_PSP34Enumerable_token_by_index {
    __kind: 'PSP34Enumerable_token_by_index'
    index: bigint
}

/**
 *  Returns the attribute of `id` for the given `key`.
 * 
 *  If `id` is a collection id of the token, it returns attributes for collection.
 */
export interface Message_PSP34Metadata_get_attribute {
    __kind: 'PSP34Metadata_get_attribute'
    id: Id
    key: Uint8Array
}

/**
 *  Leaves the contract without owner. It will not be possible to call
 *  owner's functions anymore. Can only be called by the current owner.
 * 
 *  NOTE: Renouncing ownership will leave the contract without an owner,
 *  thereby removing any functionality that is only available to the owner.
 * 
 *  On success a `OwnershipTransferred` event is emitted.
 * 
 *  # Errors
 * 
 *  Panics with `CallerIsNotOwner` error if caller is not owner
 */
export interface Message_Ownable_renounce_ownership {
    __kind: 'Ownable_renounce_ownership'
}

/**
 *  Transfers ownership of the contract to a `new_owner`.
 *  Can only be called by the current owner.
 * 
 *  On success a `OwnershipTransferred` event is emitted.
 * 
 *  # Errors
 * 
 *  Panics with `CallerIsNotOwner` error if caller is not owner.
 * 
 *  Panics with `NewOwnerIsZero` error if new owner's address is zero.
 */
export interface Message_Ownable_transfer_ownership {
    __kind: 'Ownable_transfer_ownership'
    newOwner: Uint8Array
}

/**
 *  Returns the address of the current owner.
 */
export interface Message_Ownable_owner {
    __kind: 'Ownable_owner'
}

export interface Message_Launchpad_get_public_sale_start_at {
    __kind: 'Launchpad_get_public_sale_start_at'
}

/**
 *  Mint next available token for the caller
 */
export interface Message_Launchpad_mint_next {
    __kind: 'Launchpad_mint_next'
}

/**
 *  Set max number of tokens which could be minted per call
 */
export interface Message_Launchpad_set_max_mint_amount {
    __kind: 'Launchpad_set_max_mint_amount'
    maxAmount: bigint
}

/**
 *  Get token price presale
 */
export interface Message_Launchpad_presale_price {
    __kind: 'Launchpad_presale_price'
}

/**
 *  Mint one or more tokens
 */
export interface Message_Launchpad_mint {
    __kind: 'Launchpad_mint'
    to: Uint8Array
    mintAmount: bigint
}

/**
 *  Mint for project treasury
 */
export interface Message_Launchpad_mint_project {
    __kind: 'Launchpad_mint_project'
    to: Uint8Array
    mintAmount: bigint
}

export interface Message_Launchpad_get_presale_start_at {
    __kind: 'Launchpad_get_presale_start_at'
}

export interface Message_Launchpad_get_prepresale_start_at {
    __kind: 'Launchpad_get_prepresale_start_at'
}

export interface Message_Launchpad_get_launchpad_fee {
    __kind: 'Launchpad_get_launchpad_fee'
}

export interface Message_Launchpad_get_available_to_withdraw_launchpad {
    __kind: 'Launchpad_get_available_to_withdraw_launchpad'
}

export interface Message_Launchpad_add_account_to_presale {
    __kind: 'Launchpad_add_account_to_presale'
    accountId: Uint8Array
    mintAmount: bigint
}

export interface Message_Launchpad_get_available_to_withdraw_project {
    __kind: 'Launchpad_get_available_to_withdraw_project'
}

export interface Message_Launchpad_get_launchpad_treasury_address {
    __kind: 'Launchpad_get_launchpad_treasury_address'
}

export interface Message_Launchpad_add_account_to_prepresale {
    __kind: 'Launchpad_add_account_to_prepresale'
    accountId: Uint8Array
    mintAmount: bigint
}

/**
 *  Get token price presale
 */
export interface Message_Launchpad_prepresale_price {
    __kind: 'Launchpad_prepresale_price'
}

export interface Message_Launchpad_add_account_to_prepresale_batch {
    __kind: 'Launchpad_add_account_to_prepresale_batch'
    accountIdMintAmounts: [Uint8Array, bigint][]
}

/**
 *  Get token price
 */
export interface Message_Launchpad_price {
    __kind: 'Launchpad_price'
}

export interface Message_Launchpad_get_account_prepresale_minting_amount {
    __kind: 'Launchpad_get_account_prepresale_minting_amount'
    accountId: Uint8Array
}

export interface Message_Launchpad_get_account_presale_minting_amount {
    __kind: 'Launchpad_get_account_presale_minting_amount'
    accountId: Uint8Array
}

export interface Message_Launchpad_add_account_to_presale_batch {
    __kind: 'Launchpad_add_account_to_presale_batch'
    accountIdMintAmounts: [Uint8Array, bigint][]
}

export interface Message_Launchpad_set_minting_status {
    __kind: 'Launchpad_set_minting_status'
    mintingStatusIndex: SetMintingStatusInput1
}

export interface Message_Launchpad_get_minting_status {
    __kind: 'Launchpad_get_minting_status'
}

export interface Message_Launchpad_get_project_treasury_address {
    __kind: 'Launchpad_get_project_treasury_address'
}

export interface Message_Launchpad_get_public_sale_end_at {
    __kind: 'Launchpad_get_public_sale_end_at'
}

/**
 *  Get max number of tokens which could be minted per call
 */
export interface Message_Launchpad_get_max_mint_amount {
    __kind: 'Launchpad_get_max_mint_amount'
}

/**
 *  Get max supply of tokens
 */
export interface Message_Launchpad_max_supply {
    __kind: 'Launchpad_max_supply'
}

/**
 *  Withdraw funds to launchpad project
 */
export interface Message_Launchpad_withdraw_project {
    __kind: 'Launchpad_withdraw_project'
}

/**
 *  Withdraw funds to contract owner
 */
export interface Message_Launchpad_withdraw_launchpad {
    __kind: 'Launchpad_withdraw_launchpad'
}

/**
 *  This function return the attribute name using attribute index. Beacause attributes of an NFT can be set to anything by Contract Owner, AztZero uses this function to get all attributes of an NFT
 */
export interface Message_Psp34Traits_get_attribute_name {
    __kind: 'Psp34Traits_get_attribute_name'
    index: GetAttributeNameInput1
}

/**
 *  Get URI from token ID
 */
export interface Message_Psp34Traits_token_uri {
    __kind: 'Psp34Traits_token_uri'
    tokenId: bigint
}

/**
 *  Set new value for the baseUri
 */
export interface Message_Psp34Traits_set_base_uri {
    __kind: 'Psp34Traits_set_base_uri'
    uri: SetBaseUriInput1
}

/**
 *  This function return how many unique attributes in the contract
 */
export interface Message_Psp34Traits_get_attribute_count {
    __kind: 'Psp34Traits_get_attribute_count'
}

/**
 *  This function returns all available attributes of each NFT
 */
export interface Message_Psp34Traits_get_attributes {
    __kind: 'Psp34Traits_get_attributes'
    tokenId: Id
    attributes: GetAttributesInput2
}

export interface Message_Psp34Traits_set_multiple_attributes {
    __kind: 'Psp34Traits_set_multiple_attributes'
    tokenId: Id
    metadata: SetMultipleAttributesInput2
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    name: Uint8Array
    symbol: Uint8Array
    baseUri: Uint8Array
    maxSupply: bigint
    prepresalePricePerMint: bigint
    presalePricePerMint: bigint
    pricePerMint: bigint
    prepresaleStartAt: bigint
    presaleStartAt: bigint
    publicSaleStartAt: bigint
    publicSaleEndAt: (bigint | undefined)
    launchpadFee: bigint
    projectTreasury: Uint8Array
    launchpadTreasury: Uint8Array
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Id = Id_U8 | Id_U16 | Id_U32 | Id_U64 | Id_U128 | Id_Bytes

export interface Id_U8 {
    __kind: 'U8'
    value: number
}

export interface Id_U16 {
    __kind: 'U16'
    value: number
}

export interface Id_U32 {
    __kind: 'U32'
    value: GetAttributeNameInput1
}

export interface Id_U64 {
    __kind: 'U64'
    value: bigint
}

export interface Id_U128 {
    __kind: 'U128'
    value: bigint
}

export interface Id_Bytes {
    __kind: 'Bytes'
    value: Uint8Array
}

export type GetAttributeNameInput1 = number

export type PSP34Error = PSP34Error_Custom | PSP34Error_SelfApprove | PSP34Error_NotApproved | PSP34Error_TokenExists | PSP34Error_TokenNotExists | PSP34Error_SafeTransferCheckFailed

export interface PSP34Error_Custom {
    __kind: 'Custom'
    value: Uint8Array
}

export interface PSP34Error_SelfApprove {
    __kind: 'SelfApprove'
}

export interface PSP34Error_NotApproved {
    __kind: 'NotApproved'
}

export interface PSP34Error_TokenExists {
    __kind: 'TokenExists'
}

export interface PSP34Error_TokenNotExists {
    __kind: 'TokenNotExists'
}

export interface PSP34Error_SafeTransferCheckFailed {
    __kind: 'SafeTransferCheckFailed'
    value: Uint8Array
}

export type SetBaseUriInput1 = string

export type GetAttributesInput2 = SetBaseUriInput1[]

export type SetMintingStatusInput1 = (number | undefined)

export type SetMultipleAttributesInput2 = [SetBaseUriInput1, SetBaseUriInput1][]

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
