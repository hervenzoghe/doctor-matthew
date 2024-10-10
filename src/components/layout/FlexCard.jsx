import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function FlexCard ({title, subtitle, paragraph, icon, label}) {
 return (

    <div className="flex flex-col items-center justify-between gap-5">
        <h2 className='font-medium text-title text-base text-center font-body'>{title}</h2>
        <span className='font-bold text-2xl text-subtitle text-center leading-tight'>{subtitle}</span>
        <p className='font-sans text-paragraph text-sm text-center'>{paragraph}</p>
        {(label && icon) && (
            <Button icon={icon} label={label}/>
        )}
    </div>
 )
}

FlexCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    paragraph: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
}