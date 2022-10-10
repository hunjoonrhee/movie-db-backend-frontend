
import "./Page.css"

type PaginationProps = {
    totalCards:number;
    cardsPerPage:number;
    setCurrentPage: any;
    currentPage:number;
}

export default function Page(props:PaginationProps){

    let pages = [];
    for (let i=1; i<=Math.ceil(props.totalCards/props.cardsPerPage); i++){
        pages.push(i);
    }
    return(
        <div className="pagination-container">
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => props.setCurrentPage(page)} className=
                        {page == props.currentPage ? 'active' : ''}>{page}</button>
                })
            }
        </div>

    )
}