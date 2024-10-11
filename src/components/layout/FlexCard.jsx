import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function FlexCard ({title, subtitle, paragraph, icon, label}) {
 return (

    <div className="flex flex-col items-center gap-5 md:w-1/2 md:items-start md:gap-3">
        <h2 className='text-center font-body text-base font-medium text-title md:text-left lg:text-2xl'>{title}</h2>
        <span className='text-center font-body text-2xl font-bold leading-tight text-subtitle md:text-left md:text-3xl lg:text-4xl xl:text-5xl'>{subtitle}</span>
        <p className='text-center font-sans text-sm font-normal text-paragraph md:text-justify lg:text-base xl:text-lg'>{paragraph}</p>
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