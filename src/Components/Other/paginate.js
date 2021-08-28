// Packages
import React from "react";
import Pagination from "react-paginating";

//css
import "../../styles/components/paginate.scss";

export default class Paginate extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 2,
      limit: 2,
      pageCount: 3,
      total: 6,
    };
  }

  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page,
    });
  };
  componentDidMount() {
    this.setState({ total: this.props.dataSet.length * this.state.limit });
  }

  render() {
    const { currentPage, limit, pageCount, total } = this.state;
    return (
      <Pagination
        total={total}
        limit={limit}
        pageCount={pageCount}
        currentPage={currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps,
        }) => (
          <div>
            <button
              className="first-btn"
              {...getPageItemProps({
                pageValue: 1,
                onPageChange: this.handlePageChange,
              })}
            >
              First
            </button>

            {hasPreviousPage && (
              <button
                className="left-arrow"
                {...getPageItemProps({
                  pageValue: previousPage,
                  onPageChange: this.handlePageChange,
                })}
              >
                {"<"}
              </button>
            )}

            {pages.map((page) => {
              let activePage = null;
              if (currentPage === page) {
                activePage = { backgroundColor: "#ECF7FF" };
              }
              return (
                <button
                  className="number-btn"
                  {...getPageItemProps({
                    pageValue: page,
                    key: page,
                    style: activePage,
                    onPageChange: this.handlePageChange,
                  })}
                >
                  {page}
                </button>
              );
            })}

            {hasNextPage && (
              <button
                className="right-arrow"
                {...getPageItemProps({
                  pageValue: nextPage,
                  onPageChange: this.handlePageChange,
                })}
              >
                {">"}
              </button>
            )}

            <button
              className="last-btn"
              {...getPageItemProps({
                pageValue: totalPages,
                onPageChange: this.handlePageChange,
              })}
            >
              Last
            </button>
          </div>
        )}
      </Pagination>
    );
  }
}
