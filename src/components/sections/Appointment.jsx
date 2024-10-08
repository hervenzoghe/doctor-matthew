import Heading from "../layout/Heading"
import Button from "../ui/Button"
import { appointment } from "../../data/appointment"

export default function AppointmentSection () {
    return (
        <div className="appointment-section">
            <h3>{appointment.title}</h3>
            <div className="appointment-cta">
                <Heading title={appointment.subtitle} paragraph={appointment.paragraph} />
                <Button icon={appointment.icon} label={appointment.label}/>
            </div>
        </div>
    )
}