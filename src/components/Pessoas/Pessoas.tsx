import React from "react";

type Props = {
    data: {
        name: string;
        id: number;
    };
};

const Pessoas = ({ data }: Props) => {
    return <li>
        {data.id} == {data.name} 
    </li>;
};

export default Pessoas;
