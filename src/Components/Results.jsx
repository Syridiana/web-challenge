import Patient from "./Patient";

const Results = ({ patients }) => {
    return (
        <div className="list-wrapper">
            {!patients ? (
                <h1>No Patients Found</h1>
            ) : (
                patients.map(patient => {
                    return (
                        <Patient
                        name={patient.name}
                        id={patient.id}
                        description={patient.description}
                        avatar={patient.avatar}
                        key={patient.id}
                    />
                    );
                })
            )}
        </div>
    );
};

export default Results;