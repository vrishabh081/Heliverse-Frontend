import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFun } from '../redux/action';

const Dummy = ({search}) => {
    // use state-
    const [pagination, setPagination] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");

    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.reducer);
    const {payload, isLoading} = data;

    // use effect-
    useEffect(() => {
        dispatch(getFun(searchTerm, pagination))
    }, [searchTerm, pagination])

    return (
        <Fragment>
            <div>
                <input type="text" placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            {/* Cards */}
            <div id='cards'>
                {
                    payload?.map((el) => <div key={el.id}>
                        <div>
                            <img src={el.avatar} alt={el.id} />
                            <p>{el.first_name} {el.last_name}</p>
                            <div>
                                <p>{el.domain}</p>
                                <p>{el.gender}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* Pagination */}
            <div id='pagination'>
                <button disabled={pagination === 1} onClick={() => setPagination (pagination -1)}>Prev</button>
                <button disabled={true}>{pagination}</button>
                <button onClick={() => setPagination (pagination +1)}>Next</button>
            </div>
        </Fragment>
    )
}

export default Dummy
