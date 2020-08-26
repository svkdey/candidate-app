import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";



export default class BarchartComponent extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';


    render() {
        const { appliedCount, inprogressCount, completeCount } = this.props;
        const data = [
            {
                name: 'applied', candidate: appliedCount,
            },
            {
                name: 'in-progress', candidate: inprogressCount,
            },
            {
                name: 'complete', candidate: completeCount,
            },

        ];

        return (
            <div className="card">
                <BarChart
                    width={300}
                    height={200}
                    data={data}
                    margin={{
                        top: 20, right: 10, left: 0, bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="candidate" fill='rgba(255,99,132,0.4)' />

                </BarChart>
            </div>
        );
    }
}
