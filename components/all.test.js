import { render, screen } from '@testing-library/react';
import App from '../pages/_app';
import React from 'react';
import '@testing-library/jest-dom';
import Home from '../pages';
import Figure from '../pages/figure/[id]';

let figures = [
    {
        'id':       1,
        'next':     2,
        'title':    'Erik',
        'text':     'Erik is not ashamed to show some skin. He knows he is desirable! Even though Jens is mean from time to time, he always comes crawling when he needs to mate.\nThat\'s what true love is all about, Erik usually thinks.\n\n',
        'photos':   ['http:\/\/insta.heby.nu\/data\/photos\/202011\/c5cc2b9920158b31a04283cff3f455c3.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202011\/06e5b9fdf71475d3dfd4d6b93749d998.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202011\/3f611503cde059845bc52c49f60855da.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202011\/c558248bbdb11f2674cdef9487bcf378.jpg'],
        'taken_at': '2020-11-15T17:16:26+00:00',
        'votes':    [2, 5],
    },
    {
        'id':       2,
        'next':     3,
        'title':    '9\u201d Clay',
        'text':     'This is 9\u201d Clay, he used to party all night long, and the ladies loved him!\n\n',
        'photos':   ['http:\/\/insta.heby.nu\/data\/photos\/202011\/89e7d4d02fb939fcf80a0c72e637266b.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202011\/9d81998f2f7f12c0af284e562b838d57.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202011\/79f99688219aea13ecbd4653621af455.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202011\/ebcb4c072c0bea2916f60424e6f76cea.jpg'],
        'taken_at': '2020-11-08T13:31:50+00:00',
        'votes':    [2, 5],
    },
    {
        'id':       3,
        'next':     null,
        'title':    'Grayson',
        'text':     'Grayson needs to calibrate the steering! It tends to turn left, ever since his wife drove it to the mall.\n\n',
        'photos':   ['http:\/\/insta.heby.nu\/data\/photos\/202010\/58f79435d56558f40d83b31137eafc05.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202010\/0119b85d45efd6a180e5646916cf593f.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202010\/bcedf07c9c4d7303cc26a35111e33d63.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202010\/98456b82a888bad64f398030d57fd71c.jpg', 'http:\/\/insta.heby.nu\/data\/photos\/202010\/e0136e02956cf515cfa1c2453f2575a3.jpg'],
        'taken_at': '2020-10-24T22:30:07+00:00',
        'votes':    [2, 5],
    }
];

describe('App', () => {

    it('renders without crashing', () => {

        render(<Home figures={figures}/>);

        expect(
            screen.getByRole('heading')
        ).toBeInTheDocument();
    });
});

describe('App', () => {

    it('render all images', () => {

        render(<Home figures={figures}/>);

        expect(
            screen.getAllByRole('img')
        ).toHaveLength(5);

    });
});

describe('Figure', () => {

    it('render all images for figure', () => {

        render(<Figure {...figures[0]}/>);

        expect(
            screen.getAllByRole('img')
        ).toHaveLength(8);

    });
});

describe('Figure', () => {

    it('render description', () => {

        render(<Figure {...figures[0]}/>);

        expect(
            screen.getByRole('main')
        ).toHaveTextContent('is not ashamed to show some skin');

    });
});

describe('Figure', () => {

    it('not rendering back button', () => {

        render(<Figure {...figures[0]}/>);

        expect(
            screen.getAllByRole('link').shift()
        ).toHaveTextContent('Home');

    });
});

describe('Figure', () => {

    it('not rendering next button', () => {

        render(<Figure {...figures[2]}/>);

        expect(
            screen.getAllByRole('link').pop()
        ).toHaveTextContent('Home');

    });
});
