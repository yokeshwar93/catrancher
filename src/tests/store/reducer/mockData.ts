import {
    allClowdersFoundButtonText,
    feedbackFullClowderMessage,
    feedbackFullClowderTitle
} from "../../../utils/contants";

export const mockCatsList = [
    {
        id: '1ttg',
        imageUrl: 'Image url'
    },
    {
        id: '2ttg',
        imageUrl: 'Image url'
    }
]

export const mockSelectedCats = [
    {
        id: '1ttg',
        stripes: '1',
        color: 't',
        shape: 't',
        eyes: 'g',
        imageUrl: 'Imagae url'
    },
    {
        id: '2ttg',
        stripes: '2',
        color: 't',
        shape: 't',
        eyes: 'g',
        imageUrl: 'Imagae url'
    }

]

export const mockClowder = {
    1: [
        {
            stripes: '1',
            color: 't',
            shape: 't',
            eyes: 'g',
            imageUrl: 'Image url',
            id: '1ttg'
        },
        {
            stripes: '2',
            color: 'w',
            shape: 's',
            eyes: 'b',
            imageUrl: 'Image url',
            id: '2wsb'
        },
        {
            stripes: '3',
            color: 'b',
            shape: 'r',
            eyes: 'r',
            imageUrl: 'Image url',
            id: '3brr'
        }
    ],
    2: [],
    3: [],
    4: []
}

export const validClowder = [
    {
        stripes: '1',
        color: 't',
        shape: 't',
        eyes: 'g',
        imageUrl: 'Image url',
        id: '1ttg'
    },
    {
        stripes: '2',
        color: 'w',
        shape: 's',
        eyes: 'b',
        imageUrl: 'Image url',
        id: '2wsb'
    },
    {
        stripes: '3',
        color: 'b',
        shape: 'r',
        eyes: 'r',
        imageUrl: 'Image url',
        id: '3brr'
    }
]
export const invalidClowder = [
    {
        stripes: '1',
        color: 't',
        shape: 't',
        eyes: 'g',
        imageUrl: 'Image url',
        id: '1ttg'
    },
    {
        stripes: '1',
        color: 'w',
        shape: 's',
        eyes: 'b',
        imageUrl: 'Image url',
        id: '1wsb'
    },
    {
        stripes: '3',
        color: 'b',
        shape: 'r',
        eyes: 'r',
        imageUrl: 'Image url',
        id: '3brr'
    }
]

export const invalidClowder1 = [
    {
        stripes: '1',
        color: 't',
        shape: 't',
        eyes: 'g',
        imageUrl: 'Image url',
        id: '1ttg'
    },
    {
        stripes: '3',
        color: 'w',
        shape: 's',
        eyes: 'b',
        imageUrl: 'Image url',
        id: '1wsb'
    },
    {
        stripes: '3',
        color: 'b',
        shape: 'r',
        eyes: 'r',
        imageUrl: 'Image url',
        id: '3brr'
    }
]
export const mockClowdersCount = 1;

export const mockStore = {
    catsList: mockCatsList,
    selectedCats: mockSelectedCats,
    isFetchingCatsList: false,
    clowders: mockClowder,
    clowdersFound: 0
}

export const mockFeedbackValue = {
    titleClass: '',
    messageClass: '',
    titleText: feedbackFullClowderTitle,
    messageText: feedbackFullClowderMessage,
    isSuccess: true,
    buttonText: allClowdersFoundButtonText
}

export const mockInitialState = {
    catsList: [],
    selectedCats: [],
    isFetchingCatsList: true,
    clowders: {
        1: [],
        2: [],
        3: [],
        4: [],
    },
    clowdersFound: 0
}