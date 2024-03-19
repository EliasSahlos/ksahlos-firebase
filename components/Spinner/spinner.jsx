import { CircularProgress } from "@mui/material"

function Spinner() {
    return (
        <div className="flex justify-center items-center"><CircularProgress color="inherit" thickness={5} /></div>
    )
}

export default Spinner