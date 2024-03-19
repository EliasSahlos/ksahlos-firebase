import { Pagination } from "@mui/material"

function PaginationComponent({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    return (
        <Pagination
            count={Math.ceil(totalItems / itemsPerPage)}
            color="standard"
            page={currentPage}
            onChange={(event, page) => onPageChange(page)}
            className="mb-20"
            size="medium"
            shape="rounded"
            sx={{ "& .MuiPaginationItem-root": { color: "black" } }}
        />
    )
}

export default PaginationComponent