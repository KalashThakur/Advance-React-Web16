import React from 'react';



let initState = { 
    todo: [
        {id: 1,
            title: "Learn React",
            status: false
        }
    ]
}

export const reducer = (state = initState, action) => {

    switch(action.type) 
    {
        

        default: {
            return state;
        }
    }

}
