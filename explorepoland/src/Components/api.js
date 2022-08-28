

curl --location --request POST 'https://data.mongodb-api.com/app/data-blkws/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: RHmnXZjQmq4MhBCCdHKJV2eFe3hcAey1v5IC5TpJs2jJP0PslElQe8sdBER0YG2n' \
--data-raw '{
    "collection":"collect1",
    "database":"db1",
    "dataSource":"Cluster1",
    "projection": {"_id": 1}
}'
