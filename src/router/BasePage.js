import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Counter from '../app/components/Counter';

export default function BasePage() {
    return (
        <Routes>
            <Route path='/' element={<Counter />} />
        </Routes>
    );
}
