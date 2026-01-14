import Link from "next/link";

interface InfoBoxProps {
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
    backgroundColor?: string;
    textColor?: string;
    linkBackgroundColor?: string;
}

export default function InfoBox({ title, description, linkHref, linkText, backgroundColor, textColor, linkBackgroundColor }: InfoBoxProps) {
    return (
          <div className={`p-6 rounded-lg shadow-md ${backgroundColor || 'bg-gray-100'}`}>
                    <h2 className={`text-2xl font-bold ${textColor || 'text-black'}`}>{title}</h2>
                    <p className={`mt-2 mb-4 ${textColor || 'text-gray-700'}`}>
                    {description}
                    </p>
                    <Link
                    href={linkHref}
                    className={`${linkBackgroundColor || 'bg-black'} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
                    >
                    {linkText}
                    </Link>
                </div>
    )
}