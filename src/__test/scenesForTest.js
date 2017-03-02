
/**
 * @author GJS <1353990812@qq.com>
 *
 * GJS reserves all rights not expressly granted.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 GJS
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
 
import React,{Component} from 'react'
import {Scene} from 'react-native-router-flux';

// test list
import TestsListView from './testsListView'
// test pages
// import TestFile from './testFile'
import TestImagePicker from './testImagePicker'
import TestPopupPage from './testPopupPage'
import TestPopupSelecter from './testPopupSelecter'

// 测试页面
// import ProjectAcceptanceSupplierPage from '../projects/project1/Page/ProjectAcceptance/ProjectAcceptanceSupplierPage'
// import ProjectAcceptanceCcPage from '../projects/project1/Page/ProjectAcceptance/ProjectAcceptanceCcPage'
// import ProjectAcceptanceCcScrollPage from '../projects/project1/Page/ProjectAcceptance/ProjectAcceptanceCcScrollPage'

// other
import SQLiteDemo from './SQLiteDemo'

let testComponent = TestPopupSelecter;

const scenes = [
    {
        key: 'test',
        comp: TestsListView,
    },
    {
        key: 'TestImagePicker',
        comp: TestImagePicker,
    },
    {
        key:'TestPopupPage',
        comp:TestPopupPage,
    },
    {
        key: 'TestPopupSelecter',
        comp: TestPopupSelecter,
    },
    {
        key: 'TestSomeOnePage',
        comp: testComponent,
    },{
        key:'SQLiteDemo',
        comp:SQLiteDemo,
    },
];

// module.exports =
// (
//     <Scene key="test">
//        	<Scene key='testsListView' /*initial={true}*/ hideNavBar={true} component={TestsListView} />
//     	{
//     	    scenes.map(item =>
//     	        <Scene key={item.key} component={item.comp} />)
//     	}
//     </Scene>
// );


export default scenes;


