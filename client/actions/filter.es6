const ALL_ITEM_FILTER = 'ALL_ITEM_FILTER';
const ACTIVE_ITEM_FILTER = 'ACTIVE_ITEM_FILTER';
const COMPLETED_ITEM_FILTER = 'COMPLETED_ITEM_FILTER';


const allItemFilter = () => {
  return {
    type: ALL_ITEM_FILTER,
    filter: 'all'
  }
}

const activeItemFilter = () => {
  return {
    type: ACTIVE_ITEM_FILTER,
    filter: 'active'
  }
}

const completedItemFilter = () => {
  return {
    type: COMPLETED_ITEM_FILTER,
    filter: 'completed'
  }
}


module.exports = {ALL_ITEM_FILTER, allItemFilter, ACTIVE_ITEM_FILTER, activeItemFilter, COMPLETED_ITEM_FILTER, completedItemFilter};
