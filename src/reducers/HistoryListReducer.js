import uuid from 'uuid';
import moment from 'moment'

const INITIAL_STATE = {
  empty: true,
  historyList: []
}

export default (state = INITIAL_STATE, action) => {
  const now = moment()
  const getDate = now.format('L')
  const getTime = now.format('LTS')

  switch (action.type) {
    case 'LOG_LAST_CITY': {
      // Splicing the history list to keep the most recent 7 searches.
      if (state.historyList.length > 7) {
        return {
          empty: false,
          historyList: [
            ...state.historyList.splice(
              state.historyList.length - 7,
              state.historyList.length
            ),
            {
              key: uuid(),
              location: action.location,
              date: getDate,
              timeSearched: getTime
            }
          ]
        }
      } else {
        return {
          empty: false,
          historyList: [
            ...state.historyList,
            {
              key: uuid(),
              location: action.location,
              timeSearched: getTime,
              date: getDate
            }
          ]
        }
      }
    }
    default : {
      return state
    }
  }
}