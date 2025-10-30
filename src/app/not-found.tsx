'use client';

import Error from 'next/error';

export default function GlobalNotFound() {
    return (
        <Error statusCode={404} />
    );
}