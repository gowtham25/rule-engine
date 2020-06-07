export const attributeMetaData = [
    {
        "attributeKey": "rental_amount",
        "attributeDescription": "Rental Amount",
        "dataType": "number",
    },
    {
        "attributeKey": "rental_tenure",
        "attributeDescription": "Rental Tenure",
        "dataType": "number",
    },
    {
        "attributeKey": "customer_age",
        "attributeDescription": "Customer Age",
        "dataType": "number",
    },
    {
        "attributeKey": "customer_zip",
        "attributeDescription": "Customer Zip",
        "dataType": "comma",
    },
    {
        "attributeKey": "order",
        "attributeDescription": "Order",
        "dataType": "text",
    },
];

export const metaConditions = {
    number: [
        {
            "key": "equals",
            "label": "Equals"
        },
        {
            "key": "not_equals",
            "label": "Not equals"
        },
        {
            "key": "lesser_than",
            "label": "Lesser than"
        },
        {
            "key": "greater_than",
            "label": "Greater than"
        },
        {
            "key": "lesser_than_or_equal_to",
            "label": "Lesser than or equal to"
        },
        {
            "key": "greater_than_or_equal_to",
            "label": "Greater than or equal to"
        }
    ],
    comma: [
        {
            "key": "any_one",
            "label": "Any One"
        },
        {
            "key": "all",
            "label": "All"
        },
        {
            "key": "no_one",
            "label": "No One"
        }
    ],
    text: [
        {
            "key": "has",
            "label": "Has"
        },
        {
            "key": "has_not",
            "label": "Has Not"
        },
    ]
}