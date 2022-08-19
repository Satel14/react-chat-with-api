const initialState = {
    users: [
        {
            userId:1,
            userName: "Alice Freeman",
            avatar: "https://i.pravatar.cc/150?img=58",
            online: true
        },
        {
            userId:2,
            userName: "Josefina",
            avatar: "https://i.pravatar.cc/150?img=11",
            online: true
        },
        {
            userId:3,
            userName: "Velazquez",
            avatar: "https://i.pravatar.cc/150?img=28",
            online: true
        },
        {
            userId:4,
            userName: "Barrera",
            avatar: "https://i.pravatar.cc/150?img=51",
            online: true
        },
        {
            userId:5,
            userName: "Mellisa Davenport",
            avatar: "https://i.pravatar.cc/150?img=48",
            online: true
        },
        {
            userId:6,
            userName: "Me",
            avatar: null,
            online: true
        },
        
        
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default usersReducer;