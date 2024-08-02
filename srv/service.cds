using { handover1722504817489 as my } from '../db/schema.cds';

@path : '/service/handover1722504817489Service'
service handover1722504817489Service
{
    @odata.draft.enabled
    entity Customer as
        projection on my.Customer;
}

annotate handover1722504817489Service with @requires :
[
    'authenticated-user'
];
