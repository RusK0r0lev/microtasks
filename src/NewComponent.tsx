type NewComponentsPropsType = {
    students: StudentType[];
};

type StudentType = {
    id: number;
    name: string;
    age: number;
};
function NewComponent({ students }: NewComponentsPropsType) {
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
    ];

    return (
        <table>
            <caption>Марки авто</caption>
            <tr>
                <th>Марка</th>
                <th> Модель</th>
            </tr>
            {topCars.map((element, index) => {
                return (
                    <tr>
                        <th key={index + 1}>{element.manufacturer}</th>
                        <th>{element.model} </th>
                    </tr>
                );
            })}
        </table>
    );

    // return (
    //     <ul>
    //         {students.map((student) => {
    //             return (
    //                 <div>
    //                     <ul>
    //                         <li key={student.id}>
    //                             {student.name} age: {student.age}
    //                         </li>
    //                     </ul>
    //                 </div>
    //             );
    //         })}
    //         ;
    //     </ul>
    // );
}

export default NewComponent;
