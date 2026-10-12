export const Timestamp = ({ timestamp }) => {

    if (!timestamp) { return }

    const date = new Date(timestamp).toLocaleDateString("en-GB", {

        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",

    })

    return <span>{date}</span>
}