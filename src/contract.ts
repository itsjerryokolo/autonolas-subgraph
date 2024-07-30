import {
  AddNomineeHash as AddNomineeHashEvent,
  IncentivesClaimed as IncentivesClaimedEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  PauseDispenser as PauseDispenserEvent,
  RemoveNomineeHash as RemoveNomineeHashEvent,
  Retained as RetainedEvent,
  SetDepositProcessorChainIds as SetDepositProcessorChainIdsEvent,
  StakingIncentivesBatchClaimed as StakingIncentivesBatchClaimedEvent,
  StakingIncentivesClaimed as StakingIncentivesClaimedEvent,
  StakingParamsUpdated as StakingParamsUpdatedEvent,
  TokenomicsUpdated as TokenomicsUpdatedEvent,
  TreasuryUpdated as TreasuryUpdatedEvent,
  VoteWeightingUpdated as VoteWeightingUpdatedEvent,
  WithheldAmountSynced as WithheldAmountSyncedEvent
} from "../generated/Contract/Contract"
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
} from "../generated/schema"

export function handleAddNomineeHash(event: AddNomineeHashEvent): void {
  let entity = new AddNomineeHash(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nomineeHash = event.params.nomineeHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncentivesClaimed(event: IncentivesClaimedEvent): void {
  let entity = new IncentivesClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.reward = event.params.reward
  entity.topUp = event.params.topUp
  entity.unitTypes = event.params.unitTypes
  entity.unitIds = event.params.unitIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePauseDispenser(event: PauseDispenserEvent): void {
  let entity = new PauseDispenser(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pauseState = event.params.pauseState

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveNomineeHash(event: RemoveNomineeHashEvent): void {
  let entity = new RemoveNomineeHash(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nomineeHash = event.params.nomineeHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRetained(event: RetainedEvent): void {
  let entity = new Retained(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.returnAmount = event.params.returnAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetDepositProcessorChainIds(
  event: SetDepositProcessorChainIdsEvent
): void {
  let entity = new SetDepositProcessorChainIds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositProcessors = event.params.depositProcessors
  entity.chainIds = event.params.chainIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakingIncentivesBatchClaimed(
  event: StakingIncentivesBatchClaimedEvent
): void {
  let entity = new StakingIncentivesBatchClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.chainIds = event.params.chainIds
  entity.stakingTargets = event.params.stakingTargets
  entity.stakingIncentives = event.params.stakingIncentives
  entity.totalStakingIncentive = event.params.totalStakingIncentive
  entity.totalTransferAmount = event.params.totalTransferAmount
  entity.totalReturnAmount = event.params.totalReturnAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakingIncentivesClaimed(
  event: StakingIncentivesClaimedEvent
): void {
  let entity = new StakingIncentivesClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.chainId = event.params.chainId
  entity.stakingTarget = event.params.stakingTarget
  entity.stakingIncentive = event.params.stakingIncentive
  entity.transferAmount = event.params.transferAmount
  entity.returnAmount = event.params.returnAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakingParamsUpdated(
  event: StakingParamsUpdatedEvent
): void {
  let entity = new StakingParamsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maxNumClaimingEpochs = event.params.maxNumClaimingEpochs
  entity.maxNumStakingTargets = event.params.maxNumStakingTargets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenomicsUpdated(event: TokenomicsUpdatedEvent): void {
  let entity = new TokenomicsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenomics = event.params.tokenomics

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasuryUpdated(event: TreasuryUpdatedEvent): void {
  let entity = new TreasuryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.treasury = event.params.treasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteWeightingUpdated(
  event: VoteWeightingUpdatedEvent
): void {
  let entity = new VoteWeightingUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voteWeighting = event.params.voteWeighting

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithheldAmountSynced(
  event: WithheldAmountSyncedEvent
): void {
  let entity = new WithheldAmountSynced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainId = event.params.chainId
  entity.amount = event.params.amount
  entity.updatedWithheldAmount = event.params.updatedWithheldAmount
  entity.batchHash = event.params.batchHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
