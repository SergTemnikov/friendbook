import React from 'react'
// import styles from './Paginator.module.css'
import { Pagination } from 'antd'
// import cn from 'classnames'

let Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize) // Elements per page
  // let [portionNumber, setPortionNumber] = useState(1)
  // let leftPortionPageNumber = (portionNumber - 1) * portionSize - 1
  // let rightPortionPageNumber = portionNumber * portionSize

  return (
    
      <Pagination 
        current={currentPage}
        defaultCurrent={1}
        pageSize={portionCount}
        total={totalItemsCount}
        onChange={() => onPageChanged(currentPage)}
      /> 


      // <div className={styles.page}>
      //   {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>&larr;</button>}
        
      //   {pages
      //     .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      //     .map((p) => {
      //     return <span 
      //               className={ cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
      //               key={p}
      //               onClick={(e) => {onPageChanged(p)}}>{p}
      //           </span>
      //   })}
      //   {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>&rarr;</button>}
      // </div>
  )
}

export default Paginator