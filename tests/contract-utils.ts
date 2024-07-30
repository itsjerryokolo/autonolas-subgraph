import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddNomineeHash,
  IncentivesClaimed,
  OwnerUpdated,
  PauseDispenser,
  RemoveNomineeHash,
  Retained,
  SetDepositProcessorChainIds,
  StakingIncentivesBatchClaimed,
  StakingIncentivesClaimed,
  StakingParamsUpdated,
  TokenomicsUpdated,
  TreasuryUpdated,
  VoteWeightingUpdated,
  WithheldAmountSynced
} from "../generated/Contract/Contract"

export function createAddNomineeHashEvent(nomineeHash: Bytes): AddNomineeHash {
  let addNomineeHashEvent = changetype<AddNomineeHash>(newMockEvent())

  addNomineeHashEvent.parameters = new Array()

  addNomineeHashEvent.parameters.push(
    new ethereum.EventParam(
      "nomineeHash",
      ethereum.Value.fromFixedBytes(nomineeHash)
    )
  )

  return addNomineeHashEvent
}

export function createIncentivesClaimedEvent(
  owner: Address,
  reward: BigInt,
  topUp: BigInt,
  unitTypes: Array<BigInt>,
  unitIds: Array<BigInt>
): IncentivesClaimed {
  let incentivesClaimedEvent = changetype<IncentivesClaimed>(newMockEvent())

  incentivesClaimedEvent.parameters = new Array()

  incentivesClaimedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  incentivesClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  incentivesClaimedEvent.parameters.push(
    new ethereum.EventParam("topUp", ethereum.Value.fromUnsignedBigInt(topUp))
  )
  incentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "unitTypes",
      ethereum.Value.fromUnsignedBigIntArray(unitTypes)
    )
  )
  incentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "unitIds",
      ethereum.Value.fromUnsignedBigIntArray(unitIds)
    )
  )

  return incentivesClaimedEvent
}

export function createOwnerUpdatedEvent(owner: Address): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerUpdatedEvent
}

export function createPauseDispenserEvent(pauseState: i32): PauseDispenser {
  let pauseDispenserEvent = changetype<PauseDispenser>(newMockEvent())

  pauseDispenserEvent.parameters = new Array()

  pauseDispenserEvent.parameters.push(
    new ethereum.EventParam(
      "pauseState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pauseState))
    )
  )

  return pauseDispenserEvent
}

export function createRemoveNomineeHashEvent(
  nomineeHash: Bytes
): RemoveNomineeHash {
  let removeNomineeHashEvent = changetype<RemoveNomineeHash>(newMockEvent())

  removeNomineeHashEvent.parameters = new Array()

  removeNomineeHashEvent.parameters.push(
    new ethereum.EventParam(
      "nomineeHash",
      ethereum.Value.fromFixedBytes(nomineeHash)
    )
  )

  return removeNomineeHashEvent
}

export function createRetainedEvent(
  account: Address,
  returnAmount: BigInt
): Retained {
  let retainedEvent = changetype<Retained>(newMockEvent())

  retainedEvent.parameters = new Array()

  retainedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  retainedEvent.parameters.push(
    new ethereum.EventParam(
      "returnAmount",
      ethereum.Value.fromUnsignedBigInt(returnAmount)
    )
  )

  return retainedEvent
}

export function createSetDepositProcessorChainIdsEvent(
  depositProcessors: Array<Address>,
  chainIds: Array<BigInt>
): SetDepositProcessorChainIds {
  let setDepositProcessorChainIdsEvent =
    changetype<SetDepositProcessorChainIds>(newMockEvent())

  setDepositProcessorChainIdsEvent.parameters = new Array()

  setDepositProcessorChainIdsEvent.parameters.push(
    new ethereum.EventParam(
      "depositProcessors",
      ethereum.Value.fromAddressArray(depositProcessors)
    )
  )
  setDepositProcessorChainIdsEvent.parameters.push(
    new ethereum.EventParam(
      "chainIds",
      ethereum.Value.fromUnsignedBigIntArray(chainIds)
    )
  )

  return setDepositProcessorChainIdsEvent
}

export function createStakingIncentivesBatchClaimedEvent(
  account: Address,
  chainIds: Array<BigInt>,
  stakingTargets: Array<Bytes>,
  stakingIncentives: Array<BigInt>,
  totalStakingIncentive: BigInt,
  totalTransferAmount: BigInt,
  totalReturnAmount: BigInt
): StakingIncentivesBatchClaimed {
  let stakingIncentivesBatchClaimedEvent =
    changetype<StakingIncentivesBatchClaimed>(newMockEvent())

  stakingIncentivesBatchClaimedEvent.parameters = new Array()

  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "chainIds",
      ethereum.Value.fromUnsignedBigIntArray(chainIds)
    )
  )
  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingTargets",
      ethereum.Value.fromFixedBytesArray(stakingTargets)
    )
  )
  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingIncentives",
      ethereum.Value.fromUnsignedBigIntArray(stakingIncentives)
    )
  )
  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStakingIncentive",
      ethereum.Value.fromUnsignedBigInt(totalStakingIncentive)
    )
  )
  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalTransferAmount",
      ethereum.Value.fromUnsignedBigInt(totalTransferAmount)
    )
  )
  stakingIncentivesBatchClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalReturnAmount",
      ethereum.Value.fromUnsignedBigInt(totalReturnAmount)
    )
  )

  return stakingIncentivesBatchClaimedEvent
}

export function createStakingIncentivesClaimedEvent(
  account: Address,
  chainId: BigInt,
  stakingTarget: Bytes,
  stakingIncentive: BigInt,
  transferAmount: BigInt,
  returnAmount: BigInt
): StakingIncentivesClaimed {
  let stakingIncentivesClaimedEvent = changetype<StakingIncentivesClaimed>(
    newMockEvent()
  )

  stakingIncentivesClaimedEvent.parameters = new Array()

  stakingIncentivesClaimedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakingIncentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  stakingIncentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingTarget",
      ethereum.Value.fromFixedBytes(stakingTarget)
    )
  )
  stakingIncentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingIncentive",
      ethereum.Value.fromUnsignedBigInt(stakingIncentive)
    )
  )
  stakingIncentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "transferAmount",
      ethereum.Value.fromUnsignedBigInt(transferAmount)
    )
  )
  stakingIncentivesClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "returnAmount",
      ethereum.Value.fromUnsignedBigInt(returnAmount)
    )
  )

  return stakingIncentivesClaimedEvent
}

export function createStakingParamsUpdatedEvent(
  maxNumClaimingEpochs: BigInt,
  maxNumStakingTargets: BigInt
): StakingParamsUpdated {
  let stakingParamsUpdatedEvent = changetype<StakingParamsUpdated>(
    newMockEvent()
  )

  stakingParamsUpdatedEvent.parameters = new Array()

  stakingParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxNumClaimingEpochs",
      ethereum.Value.fromUnsignedBigInt(maxNumClaimingEpochs)
    )
  )
  stakingParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxNumStakingTargets",
      ethereum.Value.fromUnsignedBigInt(maxNumStakingTargets)
    )
  )

  return stakingParamsUpdatedEvent
}

export function createTokenomicsUpdatedEvent(
  tokenomics: Address
): TokenomicsUpdated {
  let tokenomicsUpdatedEvent = changetype<TokenomicsUpdated>(newMockEvent())

  tokenomicsUpdatedEvent.parameters = new Array()

  tokenomicsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenomics",
      ethereum.Value.fromAddress(tokenomics)
    )
  )

  return tokenomicsUpdatedEvent
}

export function createTreasuryUpdatedEvent(treasury: Address): TreasuryUpdated {
  let treasuryUpdatedEvent = changetype<TreasuryUpdated>(newMockEvent())

  treasuryUpdatedEvent.parameters = new Array()

  treasuryUpdatedEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return treasuryUpdatedEvent
}

export function createVoteWeightingUpdatedEvent(
  voteWeighting: Address
): VoteWeightingUpdated {
  let voteWeightingUpdatedEvent = changetype<VoteWeightingUpdated>(
    newMockEvent()
  )

  voteWeightingUpdatedEvent.parameters = new Array()

  voteWeightingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "voteWeighting",
      ethereum.Value.fromAddress(voteWeighting)
    )
  )

  return voteWeightingUpdatedEvent
}

export function createWithheldAmountSyncedEvent(
  chainId: BigInt,
  amount: BigInt,
  updatedWithheldAmount: BigInt,
  batchHash: Bytes
): WithheldAmountSynced {
  let withheldAmountSyncedEvent = changetype<WithheldAmountSynced>(
    newMockEvent()
  )

  withheldAmountSyncedEvent.parameters = new Array()

  withheldAmountSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  withheldAmountSyncedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withheldAmountSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedWithheldAmount",
      ethereum.Value.fromUnsignedBigInt(updatedWithheldAmount)
    )
  )
  withheldAmountSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "batchHash",
      ethereum.Value.fromFixedBytes(batchHash)
    )
  )

  return withheldAmountSyncedEvent
}
