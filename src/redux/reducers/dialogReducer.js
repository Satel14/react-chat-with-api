import { getAll } from "../../api/api";
import nextId from "react-id-generator";
import alert from '../../alert/alert.mp3'

const initialState = {
    dialogs: [
        {
            dialogId: "dialog1",
            members: [
                {
                    userId: 1,
                    userName: 'Alice Freeman'
                },
                {
                    userId: 6,
                    userName: 'Me'
                }
            ],
            messages: [
                {
                    messageId: 1,
                    messageText: 'Hi, please can u help me?',
                    userId: 1,
                    createdAt: 'Sat Sep 18 2021 08:10:48'
                },
            ]
        },
        {
            dialogId: "dialog2",
            members: [
                {
                    userId: 2,
                    userName: 'Josefina'
                },
                {
                    userId: 6,
                    userName: 'Me'
                }
            ],
            messages: [
                {
                    messageId: 1,
                    messageText: 'Quickly come to the meeting room 1B, we have big server issue',
                    userId: 2,
                    createdAt: 'Sat Sep 18 2021 08:06:48'
                },
                {
                    messageId: 2,
                    messageText: 'I\'m having breakfast right now, can\'t you wait for 10 minutes?',
                    userId: 6,
                    createdAt: 'Sat Sep 10 2021 08:07:48'
                },
                {
                    messageId: 3,
                    messageText: 'We are losing money! Quick!',
                    userId: 2,
                    createdAt: 'Sat Sep 10 2021 08:09:48'
                },
            ]
        },
        {
            dialogId: "dialog3",
            members: [
                {
                    userId: 3,
                    userName: 'Velazquez'
                },
                {
                    userId: 6,
                    userName: 'Me'
                }
            ],
            messages: [
                {
                    messageId: 1,
                    messageText: 'Hi how are you?',
                    userId: 3,
                    createdAt: 'Sat Sep 17 2021 19:07:48'
                },
                {
                    messageId: 2,
                    messageText: 'Hi everything is good.',
                    userId: 6,
                    createdAt: 'Sat Sep 17 2021 19:10:48'
                },
                {
                    messageId: 3,
                    messageText: 'Good to see you',
                    userId: 3,
                    createdAt: 'Sat Sep 18 2021 19:15:48'
                },
            ]
        },
        {
            dialogId: "dialog4",
            members: [
                { userId: 4, userName: 'Barrera' },
                { userId: 6, userName: 'Me' }
            ],
            messages: [
                {
                    messageId: 1,
                    messageText: 'Hi, Barrera',
                    userId: 6,
                    createdAt: 'Sat Sep 09 2021 12:00:48'
                },
                {
                    messageId: 2,
                    messageText: 'Hi, how are you',
                    userId: 4,
                    createdAt: 'Sat Sep 09 2021 12:01:48'
                },
                {
                    messageId: 3,
                    messageText: 'Not bad, thanks.',
                    userId: 6,
                    createdAt: 'Sat Sep 09 2021 12:02:48'
                },

            ]
        },
        {
            dialogId: "dialog5",
            members: [
                {
                    userId: 5,
                    userName: 'Mellisa Davenport'
                },
                {
                    userId: 6,
                    userName: 'Me'
                }
            ],
            messages: [
                {
                    messageId: 1,
                    messageText: 'Hello, how are you?',
                    userId: 5,
                    createdAt: '2022-08-02 12:09:48'
                },
                {
                    messageId: 2,
                    messageText: 'Im fine',
                    userId: 6,
                    createdAt: '2022-08-02 17:39:48'
                },
                {
                    messageId: 3,
                    messageText: 'Ok,bye',
                    userId: 5,
                    createdAt: '2022-08-02 17:40:48'
                },

            ]
        },

    ],
    chatFilter: '',
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_MESSAGE':
            const newMessage = {
                messageId: nextId(),
                messageText: action.messageText,
                userId: action.userId,
                createdAt: new Date()
            };

            const cloneState = JSON.parse(JSON.stringify(state));

            cloneState.dialogs.map(d => d.dialogId === action.dialogId
                ? d.messages = [...d.messages, newMessage]
                : d)
            return cloneState;
        case 'SET_CHAT_FILTER':
            return {
                ...state,
                chatFilter: action.filterText
            }
        default:
            return state
    }
};

export const addMessage = (dialogId, messageText, userId) => ({ type: 'ADD_NEW_MESSAGE', dialogId, messageText, userId });
export const setChatFilter = (filterText) => ({ type: 'SET_CHAT_FILTER', filterText });

export const getMessage = (dialogId, userId) => (dispatch) => {
    const sound = new Audio(alert)
    setTimeout(() => {
        getAll.getMessage()
            .then(resp => {
                dispatch(addMessage(dialogId, resp.data.value, userId))
            })
            sound.play()
    }, 10000)
}

export default dialogReducer;