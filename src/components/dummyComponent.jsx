import React from 'react'

const DummyComponent = ({payload}) => {
    return (
        <div id='cards'>
            <div>
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
        </div>
    )
}

export default DummyComponent
